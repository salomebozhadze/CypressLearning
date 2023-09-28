/// <reference types="cypress"/>
import HomePage from "../pageObject/HomePage.cy"


describe('My Test Framework Suite', function() 
{
    before(function(){
        cy.fixture('example').then(function(data){
        this.data=data

        })
        
    })
 
it('My Test Framework case', function() {
   const homePage = new HomePage()
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    homePage.getEditBox().type(this.data.email)
    homePage.getSelect().select(this.data.gender)
    homePage.getTwoWayDataBunding().should('have.value', this.data.name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEnterPrenaun().should('be.disabled')
    homePage.getShopTab().click()

    this.data.productName.forEach((element) => {
        cy.selectProduct(element)
    });
    cy.selectProduct('Blackberry')
    cy.selectProduct('Nokia Edge')
 
})
 
 
})