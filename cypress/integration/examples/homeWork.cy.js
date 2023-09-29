/// <reference types="cypress"/>
/// <reference types="cypress-file-upload"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'
import 'cypress-file-upload';
import 'cypress-drag-drop';
import LoginPage from '../pageObject/LoginPage.cy';
import DocumentaPage from '../pageObject/DocumentPage.cy';
import MailPage from '../pageObject/MailPage.cy';


describe('Cypress HomeWork test suite', ()=>
{

  let data;
  before(function() {
  
    cy.log('Before hook started');
    cy.fixture('example').then((fdata) => {
      data = fdata;
      cy.log('Fixture loaded:', this.data);
    });
    cy.log('Before hook completed');
  });
  

    
    it('Login To Mail', () => {
      const loginPage = new LoginPage;
      const mailpage = new MailPage;
      const documentPage =  new DocumentaPage;

        cy.visit('https://mailfence.com/')
        loginPage.getSignInButton().click()
        loginPage.getEmailField().type(data.email)
        loginPage.getPasswordField().type(data.password)
        cy.wait(3000)
        loginPage.getLoginButton().click()
        cy.wait(5000)
        documentPage.getDocumentTab().click()
        cy.wait(3000)

    // Attach the file to the file input element
    cy.uploadDocument(data.fileName, data.fileName, data.fileContent);
    documentPage.getDocument().should('be.visible')


    //Send file By mail
    documentPage.getUploadDocumentCheckBox().click()
    documentPage.getMoreLinks().click()
    documentPage.getSendLink().trigger('mouseover');
    documentPage.getSendEmailLink().click()
    mailpage.getMailToField().type(data.email)
    mailpage.getSuggestEmail().click()
    mailpage.getSubjectField().type(data.mailtext)
    mailpage.getAttachment().should('be.visible')
    cy.wait(2000)
    mailpage.getMailSendButton().click()

    //check mail is received
    cy.wait(4000)
    mailpage.getRefreshMail().click()
    mailpage.getMailTitile().should('be.visible').click()
    mailpage.getMailAttachment().should('be.visible')
    mailpage.getAttachmentArrow().click({ force: true })
    mailpage.getSaveLink().click();
    mailpage.getDocumentFolder().should('be.visible').click()
    cy.wait(3000)
    mailpage.getSaveButton().click()

    //check mail is saved in documents
    documentPage.getDocumentTab().click()
    documentPage.getSavedDocument().should('be.visible')
    documentPage.getDocument().dragAndDrop("#doc_tree_trash");
    documentPage.getSavedDocument().dragAndDrop("#doc_tree_trash");
    cy.wait(3000)
    documentPage.getEmptyDocumentText().should('be.visible')
  

    //check document is in trash
    documentPage.getTrash().click()
    cy.wait(2000)
    documentPage.getDocument().should('be.visible')
    documentPage.getSavedDocument().should('be.visible')
    documentPage.getCheckBoxAll().click()
    documentPage.getMoreLinks().click()
    documentPage.getDeleteLink().click();
    documentPage.getConfirmDeleteBtn().click()
    cy.wait(2000)
    documentPage.getEmptyDocumentText().should('be.visible')

    //delete receive mail in mailbox

    mailpage.getMailIcon().click()
    mailpage.getDeleteIcon().click()
    cy.wait(2000)
    mailpage.getEmptyMailText().should('be.visible')



  });
       


    })


