module.exports = toolbox => {
  const {
    filesystem,
    template,
    print: { success, error }
  } = toolbox

  async function isReactNative() {
    const package = await filesystem.read('package.json', 'json')

    const isRN = !!package.dependencies['react-native']
    !isRN &&
      error(
        'Seu projeto possui react-native como dependencia, \nPor favor confirme no seu package.json se esta tudo certo!'
      )
    return isRN
  }

  async function createComponent(folder, name, type = 'Component') {
    if (!name) {
      error(`Nome do ${type} não especificado`)
      return
    }

    if (name[0].toUpperCase() != name[0]) {
      erro(
        `Nomes de ${type}s devem começar com a letra maiuscula. ex: TestComponent`
      )
      return
    }

    if (await isReactNative()) {
      await template.generate({
        template: `reactnative-component.js.ejs`,
        target: `${folder}/${name}/${name}${type}.js`,
        props: { name, type }
      })

      success(`${name}${type} criado!`)
    }
  }

  toolbox.createComponent = createComponent
}
