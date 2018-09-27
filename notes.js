console.log('Modulo de notas cargado')

// module.exports.addNote = function () {
//  console.log('Nueva nota')
//  return 'Nueva nota'
// }

const addNote = (titulo, cuerpo) => {
  console.log('Añado nota', titulo, cuerpo)
  return 'Nueva nota añadida'
}

const deleteNote = (titulo) => {
  console.log(`Nota  ${titulo} borrada`)
  return 'Nota borrada'
}

const listNote = () => {
  console.log('Te muestro todas las notas')
  return 'RETAHILA'
}
const leerNote = (titulo) => {
  console.log(titulo, `  dice : muuuuuua`)
  return 'Nota leída'
}

module.exports = {
  addNote,
  deleteNote,
  listNote,
  leerNote

}
