describe("UI Test", () => {
  it("ensures a user-friendly UI", () => {
    cy.visit("https://www.calculator.net/mortgage-calculator.html");

    // Verify that priority UI elements are visible
    cy.getId("header").should("be.visible");
    cy.get("h1").should("be.visible");
    cy.get(".clefthalf").should("be.visible");
    cy.get(".crighthalf").should("be.visible");
    cy.get('input[name="x"][value="Calculate"]').should("be.visible");

    // Verify that the optional fields are available and can be toggled
    cy.get('label[for="caddoptional"]').should("be.visible");
    cy.getId("cmoreoptioninputs").should("not.be.visible");
    cy.get('label[for="caddoptional"] input[type="checkbox"]').click({
      force: true,
    });
    cy.get('label[for="caddoptional"]').click();
    cy.getId("cmoreoptionlinks").click();
    cy.getId("cmoreoptioninputs").should("be.visible");
    cy.get('label[for="caddoptional"]').click();

    // Ensure the Clear button works as expected
    cy.get('input[value="Clear"]').should("be.visible");
    cy.get('input[value="Clear"]').click();
    cy.getId("chouseprice").should("not.have.value");
    cy.getId("cdownpayment").should("not.have.value");
    cy.getId("cloanterm").should("not.have.value");
    cy.getId("cinterestrate").should("not.have.value");
    cy.get(".h2result").should("be.visible");

    // Verify the layout and styling
    cy.getId("content").should("have.css", "margin", "0px");
    cy.getId("content").should("have.css", "padding", "0px 0px 15px 10px");

    // Screenshot for validation
    cy.screenshot("ui_test_screenshot");
  });
});
