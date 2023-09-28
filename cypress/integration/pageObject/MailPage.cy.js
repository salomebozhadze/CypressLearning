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
        return cy.get('.GCSDBRWBJRB')
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

    getMailAttachment(){
        return cy.get('.GCSDBRWBJRB').contains('example.txt')
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
        return cy.get('#dialBtn_OK')
    }

    getTexMail(){
        return cy.get('#gwt-uid-40')
    }


}

export default MailPage;