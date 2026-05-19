const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber')
setDefaultTimeout(30000) // define o tempo limite de um comando em CucumberJS
/*
    Existem momentos dentro da execução de um script de teste:

    1. Antes de tudo --> BeforeAll

    2. Antes de cada cenário --> Before

    3. Executa o cenário de teste

    4. Final de cada cenário --> After

    5. Depois de tudo --> AfterAll

*/

Before(async function () {
    await this.abrir_browser()
})

After(async function () {
    await this.fechar_browser()
})