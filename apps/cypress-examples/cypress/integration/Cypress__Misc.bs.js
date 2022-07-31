// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Cypress$IsenseiMonorepo from "../../../../packages/bindings/cypress/Cypress.bs.js";

Cypress$IsenseiMonorepo.context("Misc", function (param) {
  Cypress$IsenseiMonorepo.beforeEach(function (param) {
    cy.visit("https://example.cypress.io/commands/misc", undefined);
  });
  Cypress$IsenseiMonorepo.it(
    ".end() - end the command chain",
    function (param) {
      cy.get(".misc-table", undefined).within(function (param) {
        cy.contains(undefined, "Cheryl", undefined).click(undefined).end();
        cy.contains(undefined, "Charles", undefined).click(undefined);
      });
    }
  );
  Cypress$IsenseiMonorepo.it(
    "cy.exec() - execute a system command",
    function (param) {
      cy.log("Platform " + Cypress.platform + " architecture " + Cypress.arch);
      console.log(Cypress.browser);
      console.log(Cypress.env("circle"));
      var envExists = function (envString) {
        return envString !== undefined;
      };
      var isCircleOnWindows =
        Cypress.platform === "win32" && envExists(Cypress.env("circle"));
      console.log(isCircleOnWindows);
      if (isCircleOnWindows) {
        cy.log("Skipping test on CircleCI");
      }
      var isShippable =
        Cypress.platform === "linux" && envExists(Cypress.env("shippable"));
      if (isShippable) {
        cy.log("Skipping test on ShippableCI");
      }
      Cypress$IsenseiMonorepo.shouldContain(
        cy.exec("echo Jane Lane", undefined).its("stdout", undefined),
        "Jane Lane"
      );
      if (Cypress.platform === "win32") {
        Cypress$IsenseiMonorepo.shouldBeEmpty(
          cy
            .exec("print cypress.json", undefined)
            .its(
              "stderr",
              Cypress$IsenseiMonorepo.ChildrenOptions.make(
                undefined,
                undefined,
                undefined
              )
            )
        );
      } else {
        Cypress$IsenseiMonorepo.shouldBeEmpty(
          cy
            .exec("cat cypress.json", undefined)
            .its(
              "stderr",
              Cypress$IsenseiMonorepo.ChildrenOptions.make(
                undefined,
                undefined,
                undefined
              )
            )
        );
        Cypress$IsenseiMonorepo.shouldEqualInt(
          cy.exec("pwd", undefined).its("code", undefined),
          0
        );
      }
    }
  );
  Cypress$IsenseiMonorepo.it(
    "cy.focused() - get the DOM element that has focus",
    function (param) {
      cy.get(".misc-form", undefined).find("#name", undefined).click(undefined);
      Cypress$IsenseiMonorepo.shouldHaveId(
        cy.focused(
          Cypress$IsenseiMonorepo.ChildrenOptions.make(
            undefined,
            undefined,
            undefined
          )
        ),
        "name"
      );
      cy.get(".misc-form", undefined)
        .find("#description", undefined)
        .click(undefined);
      return Cypress$IsenseiMonorepo.shouldHaveId(
        cy.focused(undefined),
        "description"
      );
    }
  );
  Cypress$IsenseiMonorepo.context("Cypress.Screenshot", function (param) {
    Cypress$IsenseiMonorepo.it(
      "cy.screenshot() - take a screenshot",
      function (param) {
        cy.screenshot("my-image", undefined);
      }
    );
    return Cypress$IsenseiMonorepo.it(
      "Cypress.Screenshot.defaults() - change default config of screenshots",
      function (param) {
        var screenshotOptions = Cypress$IsenseiMonorepo.ScreenshotDefaults.make(
          [".foo"],
          "viewport",
          {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          },
          true,
          false,
          undefined,
          undefined,
          undefined,
          undefined
        );
        Cypress.Screenshot.defaults(screenshotOptions);
      }
    );
  });
  return Cypress$IsenseiMonorepo.it(
    "cy.wrap() - wrap an object",
    function (param) {
      return Cypress$IsenseiMonorepo.andInclude(
        Cypress$IsenseiMonorepo.shouldHavePropertyP(
          cy.wrap({
            foo: "bar",
          }),
          "foo"
        ),
        "bar"
      );
    }
  );
});

export {};
/*  Not a pure module */
