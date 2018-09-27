console.log('Aplicación de notas arrancada.')
const notes = require('./notes')

// const yargs = require('yargs')
// const argv= yargs.argv

const { argv } = require('yargs')

const command = argv._

// console.log(process.argv)

if (command === 'add') {
  notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
  notes.listNote()
} else if (command === 'read') {
  notes.getNote(argv.title)
} else if (command === 'remove') {
  notes.removeNote(argv.title)
} else {
  console.log('Comando desconocido')
}
