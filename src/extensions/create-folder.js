module.exports = toolbox => {
  const {
    template,
    print: { success, error }
  } = toolbox

  async function createFolder(path, name) {
    if (!name) {
      error(`Nome da configuração não especificado`)
      return
    }

    await template.generate({
      template: `config.js.ejs`,
      target: `${path}/${name}.js`,
      props: { name }
    })

    success(`${name} config criado!`)
  }

  toolbox.createFolder = createFolder
}
