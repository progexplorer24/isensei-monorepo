// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cypress$IsenseiMonorepo from "../../../../packages/bindings/cypress/Cypress.bs.js";

Cypress$IsenseiMonorepo.describe("example to-do app", function (param) {
  Cypress$IsenseiMonorepo.beforeEach(function (param) {
    cy.visit("https://example.cypress.io/todo", undefined);
  });
  Cypress$IsenseiMonorepo.it(
    "displays two todo items by default",
    function (param) {
      Cypress$IsenseiMonorepo.shouldHaveLength(
        cy.get(".todo-list li", undefined),
        2
      );
      Cypress$IsenseiMonorepo.shouldHaveText(
        cy.get(".todo-list li", undefined).first(undefined),
        "Pay electric bill"
      );
      return Cypress$IsenseiMonorepo.shouldHaveText(
        cy.get(".todo-list li", undefined).last(undefined),
        "Walk the dog"
      );
    }
  );
  Cypress$IsenseiMonorepo.it("can add new todo items", function (param) {
    var newItem = "Feed the cat";
    cy.get("[data-test=new-todo]", undefined).type(
      newItem + "{enter}",
      undefined
    );
    return Cypress$IsenseiMonorepo.shouldHaveText(
      Cypress$IsenseiMonorepo.shouldHaveLengthP(
        cy.get(".todo-list li", undefined),
        3
      ).last(
        Cypress$IsenseiMonorepo.ChildrenOptions.make(
          undefined,
          undefined,
          undefined
        )
      ),
      newItem
    );
  });
  Cypress$IsenseiMonorepo.it(
    "can check off an item as completed",
    function (param) {
      cy.contains(undefined, "Pay electric bill", undefined)
        .parent(undefined)
        .find("input[type=checkbox]", undefined)
        .check(undefined);
      return Cypress$IsenseiMonorepo.shouldHaveClass(
        cy
          .contains(undefined, "Pay electric bill", undefined)
          .parents("li", undefined),
        "completed"
      );
    }
  );
  return Cypress$IsenseiMonorepo.context(
    "with a checked task",
    function (param) {
      Cypress$IsenseiMonorepo.beforeEach(function (param) {
        cy.contains(undefined, "Pay electric bill", undefined)
          .parent(undefined)
          .find(
            "input[type=checkbox]",
            Cypress$IsenseiMonorepo.FindOptions.make(
              undefined,
              undefined,
              undefined,
              undefined
            )
          )
          .check(undefined);
      });
      Cypress$IsenseiMonorepo.it(
        "can filter for uncompleted tasks",
        function (param) {
          cy.contains(undefined, "Active", undefined).click(undefined);
          Cypress$IsenseiMonorepo.shouldHaveText(
            Cypress$IsenseiMonorepo.shouldHaveLengthP(
              cy.get(".todo-list li", undefined),
              1
            ).first(undefined),
            "Walk the dog"
          );
          return Cypress$IsenseiMonorepo.shouldNotExist(
            cy.contains(undefined, "Pay electric bill", undefined)
          );
        }
      );
      Cypress$IsenseiMonorepo.it(
        "can filter for completed tasks",
        function (param) {
          cy.contains(undefined, "Completed", undefined).click(undefined);
          Cypress$IsenseiMonorepo.shouldHaveText(
            Cypress$IsenseiMonorepo.shouldHaveLengthP(
              cy.get(".todo-list li", undefined),
              1
            ).first(
              Cypress$IsenseiMonorepo.ChildrenOptions.make(
                undefined,
                undefined,
                undefined
              )
            ),
            "Pay electric bill"
          );
          return Cypress$IsenseiMonorepo.shouldNotExist(
            cy.contains(undefined, "Walk the dog", undefined)
          );
        }
      );
      return Cypress$IsenseiMonorepo.it(
        "can delete all completed tasks",
        function (param) {
          cy.contains(undefined, "Clear completed", undefined).click(undefined);
          Cypress$IsenseiMonorepo.shouldNotHaveText(
            Cypress$IsenseiMonorepo.shouldHaveLengthP(
              cy.get(".todo-list li", undefined),
              1
            ),
            "Pay electric bill"
          );
          return Cypress$IsenseiMonorepo.shouldNotExist(
            cy.contains(undefined, "Clear completed", undefined)
          );
        }
      );
    }
  );
});

export {};
/*  Not a pure module */
