const { Given, When, Then } = require('@cucumber/cucumber')
const {expect} = require('@playwright/test')
// import { Given, When, Then, And } from "@cucumber/cucumber"
// import this.homePage from "../pages/home.page"
// import this.reservePage from "../pages/reserve.page"
// import this.purchasePage from "../pages/purchase.page"
// import this.confirmationPage from "../pages/confirmation.page"
// import { expect } from "@playwright/test"


Given('que estou no site Blazedemo', async function () {
    await this.page.goto(this.homePage.url) //abre o navegador nesta url
    await this.homePage.verificar_mensagem_boas_vindas() //confirma se aparece a mensagem inicial
});



When('seleciono a origem como {string}', async function (origem) {
    await this.homePage.selecionar_origem(origem)
});



When('o destino como {string}', async function (destino) {
    await this.homePage.selecionar_destino(destino)
});


// Versão que clica no botão a partir do texto escrito no botão
When('clico no botão {string}', async function (texto_botao) {
    await this.homePage.clicar_find_flights(texto_botao)
});


// Exemplo conforme o cenário simples, sem o texto "Find Flights"
// Se for sempre clicar no botão olhando apenas o seletor
When('clico no botão', async function () {
    // Não precisaria ter recebido parâmetro, seria somente dar a instrução de clicar
    await this.homePage.clicar_find_flights()
});


// Cenário simples - Verifica a mensagem de origem e destino separadamente
Then('verifico o texto {string}', async function (mensagem_origem_destino) {
    await this.reservePage.verificar_titulo(mensagem_origem_destino)
});


Then('verifico se a URL contem {string}', async function (pagina) {
    //await page.wait_for_load_state("networkidle")
     //expect(this.page).toHaveURL(`/${pagina}\.php/`)
     expect(this.page).toHaveURL(new RegExp(`${pagina}\\.php/?`))
});


When('seleciono o voo {string} da compania {string}', async function (voo, companhia) {
    await this.reservePage.selecionar_voo(voo, companhia)
});


When('preencho o nome como {string}', async function (nome) {
    await this.purchasePage.preencher_nome(nome)
});



When('seleciono a bandeira do cartao como {string}', async function (bandeira) {
    await this.purchasePage.selecionar_bandeira(bandeira)
});



When('marco a opcao {string}', async function (string) {
    //Não estamos usando o parametro que é recebido neste bloco
    await this.purchasePage.marcar_lembrete()
});



When('clico no botao {string}', async function (string) {
   await this.purchasePage.comprar_passagens()
});



Then('se exibe a mensagem de agredecimento {string}', async function (string) {
    await expect(this.page.locator(this.confirmationPage.mensagem)).toHaveText('Thank you for your purchase today!')
});



Then('se contém a informação {string} como {string}', async function (quantia, preco) {
    //encontra a linha em que está escrita a quantia / "Amount"
    const linha_preco = await this.page.locator('tr').filter({ has: this.page.locator('td', { hasText: quantia }) })
    //na linha selecionada, verifica se contém o valor/preço
     await expect(linha_preco).toContainText(preco)
});


//Esquema de cenário - verifica a mensagem contendo as duas cidades que recebe como parâmetro
Then('verifico o texto "Flights from {string} to {string}', async function (origem, destino) {
    await expect(this.page.locator(this.reservePage.titulo)).toHaveText(`Flights from ${origem} to ${destino}:`)
});

