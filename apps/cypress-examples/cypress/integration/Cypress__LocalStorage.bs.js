// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cypress$IsenseiMonorepo from "../../../../packages/bindings/cypress/Cypress.bs.js";

Cypress$IsenseiMonorepo.context("Local Storage", (function (param) {
        Cypress$IsenseiMonorepo.beforeEach(function (param) {
              cy.visit("https://example.cypress.io/commands/local-storage", undefined);
              
            });
        return Cypress$IsenseiMonorepo.it("cy.clearLocalStorage() - clear all data in local storage", (function (param) {
                      cy.get(".ls-btn", undefined).click(undefined).should(function (_el) {
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop1")).equal("red");
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop2")).equal("blue");
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop3")).equal("magenta");
                              
                            }).then(function (param) {
                            cy.clearLocalStorage(undefined).should(function (param) {
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop1")).equal(null);
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop2")).equal(null);
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop3")).equal(null);
                                  
                                });
                            
                          });
                      cy.get(".ls-btn", undefined).click(undefined).should(function (_el) {
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop1")).equal("red");
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop2")).equal("blue");
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop3")).equal("magenta");
                              
                            }).then(function (param) {
                            cy.clearLocalStorage(Cypress$IsenseiMonorepo.LocalStorageOptions.make(undefined, undefined)).should(function (ls) {
                                  console.log(ls);
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop1")).equal(null);
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop2")).equal(null);
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop3")).equal(null);
                                  
                                });
                            
                          });
                      cy.get(".ls-btn", undefined).click(undefined).should(function (_el) {
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop1")).equal("red");
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop2")).equal("blue");
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop3")).equal("magenta");
                              
                            }).then(function (param) {
                            cy.clearLocalStorage("prop1", undefined).should(function (ls) {
                                  console.log(ls);
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop1")).equal(null);
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop2")).equal("blue");
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop3")).equal("magenta");
                                  
                                });
                            
                          });
                      cy.get(".ls-btn", undefined).click(undefined).should(function (_el) {
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop1")).equal("red");
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop2")).equal("blue");
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop3")).equal("magenta");
                              
                            }).then(function (param) {
                            cy.clearLocalStorage("prop1", Cypress$IsenseiMonorepo.LocalStorageOptions.make(undefined, undefined)).should(function (_ls) {
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop1")).equal(null);
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop2")).equal("blue");
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop3")).equal("magenta");
                                  
                                });
                            
                          });
                      cy.get(".ls-btn", undefined).click(undefined).should(function (param) {
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop1")).equal("red");
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop2")).equal("blue");
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop3")).equal("magenta");
                              
                            }).then(function (param) {
                            cy.clearLocalStorage(/prop1|2/, undefined).should(function (_ls) {
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop1")).equal(null);
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop2")).equal(null);
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop3")).equal("magenta");
                                  
                                });
                            
                          });
                      cy.get(".ls-btn", undefined).click(undefined).should(function (param) {
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop1")).equal("red");
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop2")).equal("blue");
                              Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop3")).equal("magenta");
                              
                            }).then(function (param) {
                            cy.clearLocalStorage(/prop1|2/, Cypress$IsenseiMonorepo.LocalStorageOptions.make(undefined, undefined)).should(function (_ls) {
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop1")).equal(null);
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop2")).equal(null);
                                  Cypress$IsenseiMonorepo.expect(localStorage.getItem("prop3")).equal("magenta");
                                  
                                });
                            
                          });
                      
                    }));
      }));

export {
  
}
/*  Not a pure module */
