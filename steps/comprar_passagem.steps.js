import { Given, When, Then, And } from "@cucumber/cucumber";
import HomePage from "../pages/home.page";




Given('que estou no site Blazedemo', function () {
HomePage.page()
HomePage.selecionar_origem()
HomePage.selecionar_destino()

});



When('seleciono a origem como {string}', function (string) {

});



And('o destino como {string}', function (string) {

});



And('clico no botão {string}', function (string) {

});



Then('verifico o texto {string}', function (string) {

});



Then('se a URL contem {string}', function (string) {

});



When('seleciono o voo {string} da compania {string}', function (string, string2) {

});



Then('verifico se a URL contem {string}', function (string) {

});



When('preencho o nome como {string}', function (string) {

});



When('seleciono a bandeira do cartao como {string}', function (string) {

});



When('marco a opcao {string}', function (string) {

});



When('clico no botao {string}', function (string) {

});



Then('verifico se a url contem {string}', function (string) {

});



Then('se exibe a mensagem de agredecimento {string}', function (string) {

});



Then('se contém a informação {string} como {string}', function (string, string2) {

});



Then('verifico o texto "Flights from {string} to {string}', function (string, string2) {

});

