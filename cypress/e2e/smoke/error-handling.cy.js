describe("Error Handling Test", () => {
  it("displays appropriate error messages for invalid input", () => {
    cy.visit("https://www.calculator.net/mortgage-calculator.html");
    // Uncheck optional fields
    cy.get('label[for="caddoptional"]').click().should("not.be.checked");

    // Enter invalid data for house price
    cy.getId("chouseprice").clear().type("-387000");
    cy.getId("cdownpayment").clear().type("100");
    cy.getId("cloanterm").clear().type("200");
    cy.get('input[name="x"][value="Calculate"]').click();

    // Ensure result is not displayed
    cy.get(".h2result").should("not.exist"); // Ensure result is not displayed

    // Check for the specific error message(s)
    cy.get(".crighthalf")
      .should(
        "contain",
        "Please provide a positive home price value.",
        "Please provide a down payment percentage between 0 and 100%.",
        "Please provide a loan term value of 100 years or less."
      )
      .should("be.visible"); // Wait for the error message to be visible

    // Clear all input fields
    cy.get('input[name="chouseprice"]').clear();
    cy.get('input[name="cdownpayment"]').clear();
    cy.get('input[name="cloanterm"]').clear();
    cy.get('input[name="cinterestrate"]').clear();

    // Reload the page to reset the form
    cy.reload();

    // Uncheck optional fields
    cy.get('label[for="caddoptional"]').click().should("not.be.checked");

    // Enter invalid data for interest rate
    cy.getId("chouseprice").clear().type("387000");
    cy.getId("cdownpayment").clear().type("1000");
    cy.getId("cloanterm").clear().type("-200");
    cy.getId("cinterestrate").clear().type("-6.1");
    cy.get('input[name="x"][value="Calculate"]').click();

    // Ensure result is not displayed
    cy.get(".h2result").should("not.exist");

    // Check for the specific error message
    cy.get(".crighthalf")
      .should(
        "contain",
        "Please provide a positive interest rate value.",
        "Please provide a positive loan term value.",
        "Please provide a positive interest rate value."
      )
      .should("be.visible"); // Wait for the error message to be visible
  });
});
