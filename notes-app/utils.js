const chalk = require('chalk')
const fs = require('fs')

const addNote =  (title,content) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) =>  note.title === title)

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

const loadNotes = () => {
    try{
        const buffer = fs.readFileSync('notes.json')
        const JSONdata = buffer.toString()
        return JSON.parse(JSONdata)
    } catch(e){
        return []
    }
  
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote
}