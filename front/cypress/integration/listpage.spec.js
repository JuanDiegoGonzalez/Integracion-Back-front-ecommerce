/// <reference types="Cypress" />

describe("Product list", () => {
  it("Render list product container", () => {
    cy.visit("/list");
    cy.get(".container.product-list").should("exist");
  });
});
