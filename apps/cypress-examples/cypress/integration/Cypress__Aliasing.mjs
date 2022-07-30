// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cypress$IsenseiMonorepo from "../../../../packages/bindings/cypress/Cypress.mjs";

Cypress$IsenseiMonorepo.context("Aliasing", function (param) {
  Cypress$IsenseiMonorepo.beforeEach(function (param) {
    cy.visit("https://example.cypress.io/commands/aliasing", undefined);
  });
  Cypress$IsenseiMonorepo.it(
    ".as() - alias a DOM element for later use",
    function (param) {
      cy.get(".as-table", undefined)
        .find("tbody>tr", undefined)
        .first(undefined)
        .find("td", undefined)
        .first(
          Cypress$IsenseiMonorepo.ChildrenOptions.make(
            undefined,
            undefined,
            undefined
          )
        )
        .find("button", undefined)
        .as("firstBtn");
      cy.get("@firstBtn", undefined).click(undefined);
      return Cypress$IsenseiMonorepo.andContain(
        Cypress$IsenseiMonorepo.shouldHaveClassP(
          cy.get("@firstBtn", undefined),
          "btn-success"
        ),
        "Changed"
      );
    }
  );
  return Cypress$IsenseiMonorepo.it(
    ".as() - alias a route for later use",
    function (param) {
      cy.intercept("get", "**/comments/*", undefined).as("getComment");
      cy.get(".network-btn", undefined).click(undefined);
      return Cypress$IsenseiMonorepo.shouldEqualInt(
        cy.wait("@getComment", undefined).its("response.statusCode", undefined),
        200
      );
    }
  );
});

export {};
/*  Not a pure module */
