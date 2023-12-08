class MailPage {

    getMailToField(){
        return cy.get('#mailTo > .GCSDBRWBPL')
    }
    getSuggestEmail(){
        return cy.get('.GCSDBRWBCM > a')
    }

    getSubjectField(){
        return cy.get('#mailSubject')
    }
    getAttachment(){
        return cy.contains('example.txt')
    }

    getMailSendButton(){
        return cy.get('#mailSend')
    }

    getRefreshMail(){
        return cy.get('[title="Refresh"]')
    }

    getMailTitile(){
        return cy.get('.listSubject').contains('Hello, it is mail')
    }

    getAttachmentArrow(){
        return cy.get('.GCSDBRWBN a b')
    }

    getSaveLink(){
        return cy.get(".GCSDBRWBOQ").contains("Save in Documents")
    }

    getDocumentFolder(){
        return cy.get('.treeItemLabel').contains("My documents")
    }

    getSaveButton(){
        return cy.get('#dialBtn_OK', { timeout : 5000 })
    }

    getMailIcon(){
        return cy.get('.icon24-Message')
    }

    getDeleteIcon(){
        return cy.get('[title="To Trash"]')
    }
    getEmptyMailText(){
        return cy.contains('Your inbox is empty')
    }


}

export default MailPage;