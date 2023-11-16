describe("Edge Cases Test", () => {
  it("handles edge cases appropriately", () => {
    cy.visit("https://www.calculator.net/mortgage-calculator.html");

    // Uncheck optional fields
    cy.get('label[for="caddoptional"]').click().should("not.be.checked");

    // Case 1: Lowest Loan Amount
    cy.getId("chouseprice").clear().type("1");
    cy.getId("cdownpayment").clear().type("0");
    cy.getId("cloanterm").clear().type("1");
    cy.getId("cinterestrate").clear().type("1");
    cy.get('input[name="x"][value="Calculate"]').click();

    // Verify the result, check for validity based on your expectations

    // Clear input fields
    cy.get('input[name="chouseprice"]').clear();
    cy.get('input[name="cdownpayment"]').clear();
    cy.get('input[name="cloanterm"]').clear();
    cy.get('input[name="cinterestrate"]').clear();

    // Case 2: Highest Loan Amount
    cy.getId("chouseprice").clear().type("999999999");
    cy.getId("cdownpayment").clear().type("0");
    cy.getId("cloanterm").clear().type("1");
    cy.getId("cinterestrate").clear().type("1");
    cy.get('input[name="x"][value="Calculate"]').click();

    // Verify the result, check for validity based on your expectations

    // Clear input fields
    cy.get('input[name="chouseprice"]').clear();
    cy.get('input[name="cdownpayment"]').clear();
    cy.get('input[name="cloanterm"]').clear();
    cy.get('input[name="cinterestrate"]').clear();

    // Edge Case 3: Highest Interest Rate
    cy.getId("chouseprice").clear().type("500000");
    cy.getId("cdownpayment").clear().type("0");
    cy.getId("cloanterm").clear().type("100");
    cy.getId("cinterestrate").clear().type("100");
    cy.get('input[name="x"][value="Calculate"]').click();

    // Verify the result, check for validity based on your expectations
    cy.get(".h2result").should("be.visible").and("contain", "$41,666.67");

    // Clear input fields
    cy.get('input[name="chouseprice"]').clear();
    cy.get('input[name="cdownpayment"]').clear();
    cy.get('input[name="cloanterm"]').clear();
    cy.get('input[name="cinterestrate"]').clear();
  });
});
