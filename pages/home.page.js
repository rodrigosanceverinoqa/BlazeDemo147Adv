import { expect } from "@playwright/test"

export default class HomePage {
    // Construtor com o mapeamento dos elementos
    constructor(page){
        this.page = page   // o objeto do Playwright interno recebe o objeto Playwright externo
        this.titulo = 'h1'
        this.origem = '[name="fromPort"]'
        this.destino = '[name="toPort"]'
        this.btnFindFlights = '.btn-primary'
        this.url = 'https://www.blazedemo.com'
    }

    // Mapear as ações
    async selecionar_origem(origem) {
        await this.page.locator(this.origem).selectOption(origem)
    }

    async selecionar_destino(destino) {
        await this.page.locator(this.destino).selectOption(destino)
    }

    //Este seria para o exemplo sem parâmetro
    async clicar_find_flights() {
        await this.page.locator(this.btnFindFlights).click()
    }

    //Este seria para o exemplo com parâmetro (texto no botão)
    async clicar_find_flights(texto_botao) {
        await this.page.getByRole('button', {name: texto_botao}).click()
    }

    // Jeito "Rebelde" - verificação dentro do mapeamento
    async verificar_mensagem_boas_vindas(){
        // espera o seletor do título aparecer, carregar na página
        await this.page.waitForSelector(this.titulo)
        // extrair o texto do título (que está no elemento) e guardar na variável
        const titulo_pagina = await this.page.textContent(this.titulo)
        // comparar o texto extraído com o texto esperado
        if (!titulo_pagina.includes('Welcome to the Simple Travel Agency!') ) {
            throw new Error('Titulo na Home ausente ou diferente do esperado')
        }
    }

}
