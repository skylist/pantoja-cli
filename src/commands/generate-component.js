module.exports = {
  name: 'g:component',
  description: 'Cria um novo componente dentro de src/components',
  run: async toolbox => {
    const { parameters, createComponent } = toolbox
    const name = parameters.first

    await createComponent('src/components', name)
  }
}
