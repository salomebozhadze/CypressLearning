/// <reference types="cypress"/>
/// <reference types="cypress-file-upload"/>


import 'cypress-file-upload';
import 'cypress-drag-drop';
import LoginPage from '../pageObject/LoginPage.cy';
import DocumentaPage from '../pageObject/DocumentPage.cy';
import MailPage from '../pageObject/MailPage.cy';


describe('Cypress HomeWork test suite', ()=>
{
    // before
    // it('Open Site', () => {

    //     cy.visit('https://mailfence.com/')

    // })

    
    it('Login To Mail', () => {
      const loginPage = new LoginPage;
      const mailpage = new MailPage;
      const documentPage =  new DocumentaPage;

        cy.visit('https://mailfence.com/')
        loginPage.getSignInButton().click()
        loginPage.getEmailField().type('sal.bozhadze@mailfence.com')
        loginPage.getPasswordField().type('Test12345!')
        cy.wait(3000)
        loginPage.getLoginButton().click()
        cy.wait(5000)
        documentPage.getDocumentTab().click()
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
    documentPage.getUploadDocumentCheckBox().click()
    documentPage.getMoreLinks().click()
    documentPage.getSendLink().trigger('mouseover');
    documentPage.getSendEmailLink().click()
    mailpage.getMailToField().type('sal.bozhadze@mailfence.com')
    mailpage.getSuggestEmail().click()
    mailpage.getSubjectField().type('Hello, it is mail')
    mailpage.getAttachment().should('be.visible')
    cy.wait(2000)
    mailpage.getMailSendButton().click()

    cy.wait(4000)
    mailpage.getRefreshMail().click()
    mailpage.getMailTitile().should('be.visible').click()
    mailpage.getMailAttachment().should('be.visible')
    mailpage.getAttachmentArrow().click({ force: true })
    mailpage.getSaveLink().click();
    mailpage.getDocumentFolder().should('be.visible').click()
    cy.wait(3000)
    mailpage.getSaveButton().click()

    documentPage.getDocumentTab().click()

 
    
    documentPage.getDocument().dragAndDrop("#doc_tree_trash");


  });
       


    })


