describe("Core functionality test", () => {
  it("calculates monthly payment accurately", () => {
    cy.visit("https://www.calculator.net/mortgage-calculator.html");

    // Enter valid data
    cy.getId("chouseprice").clear().type("387000");
    cy.getId("cdownpayment").clear().type("10");
    cy.getId("cloanterm").clear().type("22");
    cy.getId("cinterestrate").clear().type("6.1");

    // Uncheck optional fields
    cy.get('label[for="caddoptional"]').click().should("not.be.checked");

    // Click on the Calculate button
    cy.get('input[name="x"][value="Calculate"]').click();

    // Verify the result
    cy.get(".h2result").should("contain", "$2,399.78");
  });
});
