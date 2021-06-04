 const yargs = require('yargs')
 const utils = require('./utils')

//yargs.version("1.2.0")

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string' 
        },
        content: {
            describe: "Content of the note",
            demandOption: true,
            type: 'string'
        }       
    },
    handler(argv){ utils.addNote(argv.title, argv.content) }
        //console.log("Title:" + argv.title + '\n' + "Content:" + argv.content)
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){ utils.removeNote(argv.title) }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Read a Note',
            demandOption: true,
            type: 'string'
        } 
    },
    handler(argv){ utils.readNote(argv.title) }
    }
)

yargs.command({
    command: 'list',
    description: 'List all notes',
    handler(){ utils.listNote()}
})


yargs.parse()
// console.log(yargs.argv)


