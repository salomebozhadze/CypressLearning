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

    getSavedDocument(){
        return cy.get('.GCSDBRWBFT').contains('example_1.txt')
    }

    getEmptyDocumentText(){
        return cy.contains('There are no documents in this folder yet')
    }

    getCheckBoxAll(){
        return cy.get('.icon.icon-checkb')
    }

    getDeleteLink(){
        return cy.get('span.GCSDBRWBFR').contains('Delete')
    }

    getConfirmDeleteBtn(){
        return cy.get('#dialBtn_YES > .btnCtn')
    }

    


}
export default DocumentaPage;