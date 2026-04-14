import { expect } from "@playwright/test"

export default class HomePage {
    // Construtor com o mapeamento dos elementos
    constructor(page){
        this.page = page   // o objeto do Playwright interno recebe o objeto Playwright externo
        this.titulo = 'h1'
        this.origem = '[name="fromPort"]'
        this.destino = '[name="toPort"]'
        this.btnFindFlights = '.btn-primary'
    }

    // Mapear as ações
    async selecionar_origem(cidade_origem) {
        await this.page.locator(this.origem).selectOption(cidade_origem)
    }

    async selecionar_destino(cidade_destino) {
        await this.page.locator(this.destino).selectOption(cidade_destino)
    }

    async clicar_find_flights() {
        await this.page.locator(this.btnFindFlights).click()
    }

    async verificar_mensagem_boas_vindas(){
        await expect(titulo)
    }

}
