const chalk = require('chalk')
const fs = require('fs')


const addNote =  (title,content) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) =>  note.title === title)

    //debugger

    if (duplicateNotes.length === 0){
         notes.push({
            title: title,
            content: content
        })
    
        saveNotes(notes)
        console.log("New note added!")
    } else {
        console.log('Note already present!')
    }

}

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.bgMagentaBright("Your Notes..."))
    notes.forEach(note => {
        
        console.log(chalk.bgGreenBright(note.title))
    });

}

const removeNote = (title) => {
    
    const notes = loadNotes()
    
    const subNote = notes.filter((note) => note.title != title)

    if(subNote.length < notes.length){
        saveNotes(subNote)
        console.log(chalk.bgGreenBright("Note Removed"))
    } else {
        console.log(chalk.bgRedBright("Note not found!"))
    }
        
}

const readNote = (title) => {
    const notes = loadNotes()
    
    console.log(chalk.cyanBright("Your Note..."))
    notes.forEach(note => {
        if(note.title === title){
            console.log(note.content)
        }
    })
    
}

const loadNotes = () => {
    try{
        const buffer = fs.readFileSync('notes.json')
        const JSONdata = buffer.toString()
        //console.log(JSON.parse(JSONdata))
        return JSON.parse(JSONdata)
    } catch(e){
        return []
    }
  
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    //console.log("dataJSON:" + dataJSON)

    fs.writeFileSync('notes.json',dataJSON)
}


module.exports = {
    addNote: addNote,
    listNote: listNote,
    readNote: readNote,
    removeNote: removeNote
}