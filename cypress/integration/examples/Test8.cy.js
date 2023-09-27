/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('My Iframe Test Suite', function() 
{
 
it('My Iframe case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.frameLoaded('#courses-iframe')

cy.iframe().find('a[href*="mentorship"]').eq(0).click()
cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
 
//cy.get('div.mouse-hover-content').invoke('show')
// cy.contains('Top').click({force: true})
// cy.url().should('include','top')
})
 
 
})