module.exports = {
  name: 'pantoja',
  run: async toolbox => {
    const {
      print: { success, info, error }
    } = toolbox

    info('\n')
    error(
      '  (                   )               )                                   (      (     '
    )
    error(
      '  )\\ )     (       ( /(    *   )   ( /(             (               (     )\\ )   )\\ )  '
    )
    error(
      ' (()/(     )\\      )\\()) \\ )  /(   )\\())     (      )\\              )\\   (()/(  (()/(  '
    )
    error(
      '  /(_)) ((((_)(   ((_)\\   ( )(_)) ((_)\\      )\\  ((((_)(    ___   (((_)   /(_))  /(_)) '
    )
    error(
      ' (_))    )\\ _ )\\   _((_) (_(_())    ((_)    ((_)  )\\ _ )\\  |___|  )\\___  (_))   (_))   '
    )
    error(
      ' | _ \\   (_)_\\(_) | \\| | |_   _|   / _ \\   _ | |  (_)_\\(_)       ((/ __| | |    |_ _|  '
    )
    error(
      ' |  _/    / _ \\   | .\\ |   | |    | (_) | | || |   / _ \\          | (__  | |__   | |   '
    )
    error(
      ' |_|     /_/ \\_\\  |_|\\_|   |_|     \\___/   \\__/   /_/ \\_\\          \\___| |____| |___|  '
    )

    info('\n')
    success('    > CLI para facilitar a vida de quem trabalha com react native')
    info('\n')
    success('    |-----------------------------------|')
    success('    |      para mais informações use    |')
    success('    |      command: pantoja -h          |')
    success('    |-----------------------------------|')
    info('\n')
  }
}
