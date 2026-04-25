export default class PurchasePage {

    constructor(page) {
        this.page = page
        this.url = '/purchase\.php/'
        this.nome = '#inputName'
        this.bandeira = '[name="cardType"]'
        this.remember = '#rememberMe'
        this.btn_purchase_Flight = 'btn.btn-primary'
    }

    //funções
    // Neste mapeamento estamos seguindo o padrão, não há verificação

    async preencher_nome(nome) {
        await this.page.locator(this.nome).fill(nome)
    }

    async selecionar_bandeira(bandeira) {
        await this.page.locator(this.bandeira).selectOption(bandeira)
    }

    async marcar_lembrete() {
        await this.page.locator(this.remember).check()
    }

    async comprar_passagens() {
        await this.page.locator(this.btn_purchase_Flight).click()
    }



}
