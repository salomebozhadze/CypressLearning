/// <reference types="cypress"/>
describe('Cypress HomeWork test suite', ()=>
{
    // before
    // it('Open Site', () => {

    //     cy.visit('https://mailfence.com/')

    // })

    
    it('Login To Mail', () => {

        cy.visit('https://mailfence.com/')
        cy.get('#signin').click()
        cy.get('#UserID').type('sal.bozhadze@mailfence.com')
        cy.get('#Password').type('Test12345!')
        cy.wait(3000)
        cy.get('.btn').click()
        cy.wait(5000)
        cy.get('.icon24-Documents').click()
        cy.wait(3000)
        const fileName = 'example.txt';
    const fileContent = 'This is the content of the .txt file.';
    
    cy.writeFile(`cypress/fixtures/${fileName}`, fileContent);

    // Attach the file to the file input element
    cy.fixture(fileName).then((file) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: file,
        fileName: fileName,
        mimeType: 'text/plain',
      });

    });

    // Read the .txt file content
    cy.readFile(`cypress/fixtures/${fileName}`).should('contain', fileContent);

    //Send file By mail
    cy.get('.checkIcon').click()
    cy.get(':nth-child(2) > .more > .icon-Etc').click()
    cy.get('.GCSDBRWBDR').trigger('mouseover');
    cy.get('.GCSDBRWBOQ > .GCSDBRWBFR').contains('Send by e-mail').click()
    cy.get('#mailTo > .GCSDBRWBPL').type('sal.bozhadze@mailfence.com')
    cy.get('.GCSDBRWBCM > a').click()
    cy.get('#mailSubject').type('Hello, it is mail')
    cy.get('.GCSDBRWBJRB').should('be.visible')
    cy.wait(2000)
    cy.get('#mailSend').click()

    cy.wait(4000)
    cy.get('.GCSDBRWBCQC').find('.GCSDBRWBO').contains('Refresh').click()
    cy.get('.listSubject').contains('Hello, it is mail').should('be.visible').click()
    cy.get('.GCSDBRWBJRB').contains('example.txt').should('be.visible')
    cy.get('.GCSDBRWBN a b').click({ force: true })
    cy.get(".GCSDBRWBOQ").contains("Save in Documents").click();
    cy.get('.treeItemLabel').contains("My documents").should('be.visible').click()
    cy.wait(3000)
    cy.get('#dialBtn_OK').click()

    cy.get('.icon24-Documents').click()

    Cypress.Commands.add('dragTo', { prevSubject: 'element' }, (subject, targetSelector) => {
        cy.wrap(subject)
          .trigger('dragstart', { dataTransfer: {} }) // Trigger dragstart event on the element
          .trigger('drag', { dataTransfer: {} }) // Trigger drag event on the element
          .trigger('drop') // Trigger drop event on the element
          .trigger('dragend'); // Trigger dragend event on the element
        cy.get(targetSelector).trigger('drop'); // Trigger drop event on the target
      });

      cy.get('.GCSDBRWBFT').contains('example.txt').as('dragElement');
      cy.get('#doc_tree_trash').as('dropTarget');
      cy.get('@dragElement').dragTo('@dropTarget');
    //   cy.get('.GCSDBRWBFT').contains('example.txt').dragTo('#doc_tree_trash');

  });
       


    })


