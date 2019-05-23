module.exports = {
  name: 'g:config',
  description: 'Cria a estrutura de configurações em src/config',
  run: async toolbox => {
    const { parameters, createFolder } = toolbox
    const name = parameters.first
    await createFolder('src/config', name)
  }
}
