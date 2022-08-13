// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.Todo Machine.Create new todo.Saving Todo:invocation[0]": {
      type: "done.invoke.Todo Machine.Create new todo.Saving Todo:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.Todo Machine.Deleting todo:invocation[0]": {
      type: "done.invoke.Todo Machine.Deleting todo:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.Todo Machine.Loading Todos:invocation[0]": {
      type: "done.invoke.Todo Machine.Loading Todos:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.Todo Machine.Create new todo.Saving Todo:invocation[0]": {
      type: "error.platform.Todo Machine.Create new todo.Saving Todo:invocation[0]";
      data: unknown;
    };
    "error.platform.Todo Machine.Deleting todo:invocation[0]": {
      type: "error.platform.Todo Machine.Deleting todo:invocation[0]";
      data: unknown;
    };
    "error.platform.Todo Machine.Loading Todos:invocation[0]": {
      type: "error.platform.Todo Machine.Loading Todos:invocation[0]";
      data: unknown;
    };
    "xstate.after(2500)#Todo Machine.Deleting Todo errored": {
      type: "xstate.after(2500)#Todo Machine.Deleting Todo errored";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    deleteTodo: "done.invoke.Todo Machine.Deleting todo:invocation[0]";
    loadTodos: "done.invoke.Todo Machine.Loading Todos:invocation[0]";
    saveTodo: "done.invoke.Todo Machine.Create new todo.Saving Todo:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    services: "loadTodos" | "saveTodo" | "deleteTodo";
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    assignErrorToContext:
      | "error.platform.Todo Machine.Create new todo.Saving Todo:invocation[0]"
      | "error.platform.Todo Machine.Deleting todo:invocation[0]"
      | "error.platform.Todo Machine.Loading Todos:invocation[0]";
    assignFormInputToContext: "Form input change";
    assignTodosToContext: "done.invoke.Todo Machine.Loading Todos:invocation[0]";
  };
  eventsCausingServices: {
    deleteTodo: "Delete";
    loadTodos:
      | "done.invoke.Todo Machine.Create new todo.Saving Todo:invocation[0]"
      | "done.invoke.Todo Machine.Deleting todo:invocation[0]"
      | "xstate.init";
    saveTodo: "Submit";
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | "Create new todo"
    | "Create new todo.Saving Todo"
    | "Create new todo.Showing form input"
    | "Deleting Todo errored"
    | "Deleting todo"
    | "Loading Todos"
    | "Loading todos errored"
    | "Todos Loaded"
    | { "Create new todo"?: "Saving Todo" | "Showing form input" };
  tags: never;
}
