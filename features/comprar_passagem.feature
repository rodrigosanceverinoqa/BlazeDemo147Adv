#language: pt
Funcionalidade: Compra de Passagem
    Cenario: Compra com Sucesso
    Dado que estou no site Blazedemo
    Quando seleciono a origem como "São Paolo" 
    E o destino como "London"
    E clico no botão "Find Flights"
    Entao verifico o texto "Flights from São Paolo to london"
    E se a URL contem "reserve"
    Quando seleciono o voo "9696" da compania "Aer Lingus"
    Entao verifico se a URL contem "purchase"
    Quando preencho o nome como "Charlie Brown"
    E seleciono a bandeira do cartao como "Amex"
    E marco a opcao "Remember me"
    E clico no botao "Pruchase Flight"
    Entao verifico se a url contem "confirmation"
    E se exibe a mensagem de agredecimento "Thank you for your purchase today!"
    E se contém a informação "Amount" como "555 USD"