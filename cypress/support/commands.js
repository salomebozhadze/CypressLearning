
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

  // Command#3 Generate attachment and create it in the directory
Cypress.Commands.add('generateAttachment', (filePath, attachmentName, attachmentExtension, attachmentText)=> {
  cy.writeFile(`${filePath}\\${attachmentName}.${attachmentExtension}`, `${attachmentText}`);
  cy.readFile(`${filePath}\\${attachmentName}.${attachmentExtension}`).should("not.be.null");
})
  

