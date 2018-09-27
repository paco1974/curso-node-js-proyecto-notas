console.log('Modulo de notas cargado')

// module.exports.addNote = function () {
//  console.log('Nueva nota')
//  return 'Nueva nota'
// }

const addNote = () => {
  console.log('Nueva nota')
  return 'Nueva nota'
}

const deleteNote = (id) => {
  console.log(`Nota  ${id} borrada`)
  return 'Nota borrada'
}

module.exports = {
  addNote,
  deleteNote

}
