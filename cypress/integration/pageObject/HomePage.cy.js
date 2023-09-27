class HomePage
{
getEditBox(){
    return cy.get('input[name="name"]:nth-child(2)')
}

getTwoWayDataBunding(){
    return cy.get(':nth-child(4) > .ng-untouched')
}
getSelect(){
    return cy.get('select')
}
getEnterPrenaun(){
    return cy.get('#inlineRadio3')
}

getShopTab(){
    return cy.get(':nth-child(2) > .nav-link')
}
}
export default HomePage;