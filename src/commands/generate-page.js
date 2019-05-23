module.exports = {
  name: 'g:screen',
  description: 'Cria uma nova tela dentro de src/screens',
  run: async toolbox => {
    const { parameters, createComponent } = toolbox
    const name = parameters.first
    await createComponent('src/screens', name, 'Screen')
  }
}
