/// <reference types="cypress"/>
describe('Cypress first test suite', ()=>
{
    it('My first case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        console.log('sf')
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                $el.find('button').click()
            }

        })
        // const logo=cy.get('.brand')
        // cy.log(logo.text())
        cy.get('.brand').then( (logoElement) => {
            cy.log(logoElement.text())

        })
    })
}
)