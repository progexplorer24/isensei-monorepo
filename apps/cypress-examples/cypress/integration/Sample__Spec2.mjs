// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cypress$IsenseiMonorepo from "../../../../packages/bindings/cypress/Cypress.mjs";

Cypress$IsenseiMonorepo.describe("My First Test", function (param) {
  Cypress$IsenseiMonorepo.it("Does not do much!", function (param) {
    Cypress$IsenseiMonorepo.expect(true).equal(true);
  });
});

Cypress$IsenseiMonorepo.describe("My First link visit", function (param) {
  return Cypress$IsenseiMonorepo.it(
    "Visits the Kitchen Sink",
    function (param) {
      cy.visit("https://example.cypress.io", undefined);
      cy.pause(undefined);
      cy.contains(undefined, "type", undefined).click(undefined);
      Cypress$IsenseiMonorepo.shouldInclude(
        cy.url(undefined),
        "/commands/actions"
      );
      return Cypress$IsenseiMonorepo.shouldHaveValue(
        cy.get(".action-email", undefined).type("fake@email.com", undefined),
        "fake@email.com"
      );
    }
  );
});

export {};
/*  Not a pure module */
