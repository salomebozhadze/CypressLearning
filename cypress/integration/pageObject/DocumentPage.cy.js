class DocumentaPage {

    getDocumentTab(){
        return cy.get('.icon24-Documents')
    }

    getUploadDocumentCheckBox(){
        return cy.get('.checkIcon')
    }

    getMoreLinks(){
        return cy.get(':nth-child(2) > .more > .icon-Etc')
    }

    getSendLink(){
        return cy.get('.GCSDBRWBDR')
    }

    getSendEmailLink(){
        return cy.get('.GCSDBRWBOQ > .GCSDBRWBFR').contains('Send by e-mail')
    }

    getDocument(){
        return cy.get('.GCSDBRWBFT').contains('example.txt')
    }

    getTrash(){
        return cy.get('#doc_tree_trash')
    }


}
export default DocumentaPage;