// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName)){
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
})

Cypress.Commands.add("dragAndDrop", { prevSubject: "element" }, (subject, targetEl) => {
    cy.wrap(subject).trigger("mousedown", { button: 0 }).trigger("mousemove", { clientX: 100, clientY: 100 });
    cy.get(targetEl).trigger("mousemove", { clientX: 100, clientY: 100 }).trigger("mouseup", { force: true });
  }
);

Cypress.Commands.add("uploadDocument", (filePath, fileName, fileContent) => {
    // Write the file content to a file in the fixtures directory
    cy.writeFile(`cypress/fixtures/${fileName}`, fileContent);
  
    // Attach the file to the file input element
    cy.fixture(fileName).then((file) => {
      cy.get('input[type="file"]').attachFile({
        fileContent: file,
        fileName: fileName,
        mimeType: 'text/plain',
      });
    });
  
    // Read the .txt file content (optional)
    cy.readFile(`cypress/fixtures/${fileName}`).should('contain', fileContent);
  });
  
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js
