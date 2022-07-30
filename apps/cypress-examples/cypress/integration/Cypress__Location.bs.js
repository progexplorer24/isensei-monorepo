// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cypress$IsenseiMonorepo from "../../../../packages/bindings/cypress/Cypress.bs.js";

Cypress$IsenseiMonorepo.context("Location", (function (param) {
        Cypress$IsenseiMonorepo.beforeEach(function (param) {
              cy.visit("https://example.cypress.io/commands/location", undefined);
              
            });
        Cypress$IsenseiMonorepo.it("cy.hash() - get the current URL hash", (function (param) {
                return Cypress$IsenseiMonorepo.shouldBeEmpty(cy.hash(undefined));
              }));
        Cypress$IsenseiMonorepo.it("cy.location() - get window.location", (function (param) {
                cy.location(undefined).should(function (locObject) {
                      Cypress$IsenseiMonorepo.expect(locObject.hash).equal("");
                      Cypress$IsenseiMonorepo.expect(locObject.href).equal("https://example.cypress.io/commands/location");
                      Cypress$IsenseiMonorepo.expect(locObject.host).equal("example.cypress.io");
                      Cypress$IsenseiMonorepo.expect(locObject.hostname).equal("example.cypress.io");
                      Cypress$IsenseiMonorepo.expect(locObject.origin).equal("https://example.cypress.io");
                      Cypress$IsenseiMonorepo.expect(locObject.pathname).equal("/commands/location");
                      Cypress$IsenseiMonorepo.expect(locObject.port).equal("");
                      Cypress$IsenseiMonorepo.expect(locObject.protocol).equal("https:");
                      Cypress$IsenseiMonorepo.expect(locObject.search).equal("");
                      
                    });
                
              }));
        return Cypress$IsenseiMonorepo.it("cy.url() - get the current URL", (function (param) {
                      return Cypress$IsenseiMonorepo.shouldEqualString(cy.url(undefined), "https://example.cypress.io/commands/location");
                    }));
      }));

export {
  
}
/*  Not a pure module */
