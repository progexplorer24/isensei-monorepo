import { assign, createMachine } from "xstate";

export const machine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAICyBDAxgBYCWAdmAHQAyquEZUmaGsAxBuRWQG6oDWlZljxEylGnQZN0qWAh6p8uAC7FUpANoAGALqJQAB1nFV6-SAAeiALQAOWxQCstgGwuAnFoDsH2wBYXLy8AGhAATxtnFwp3ACYAZi13Pz8ARj9YgMcAX2zQoRwCEk4JelJGITYwACdq1GqKAwAbFQAzeoBbCgKRYvFaMoqZOQUlU01dcyNYEzVScysEa0ctLQpbd1SveL8tW3TYt0dQiKW-R3iKFz3Pby1zrUcvP1z8mULRTkrMUshWAGFqmAVGBMOQAO5TYzjBaILaxChaBJbTbeRyHdwhcI2NKXNK3AJ+eLPdzueKvEA9IpibrDH4DP4AETATTAyjAUJmMKQlkQ1z8FCCfi8j0c11s6PiJ0iXncgqJRNSnlJtliOTylPevRpgOB7LBYHBmGUMgoAGVCKhwVJ2tUOpgyAYAK7KVgAMU6DtIzuUmCIuHKHJ501mZh5i2sfk2TlcWy08USWy86WlCHc0QSG3u6W2PkeFKpn0oupBBqNJow5st1vKmFt9sdLtYZqdACMOiZOaH5uGbLFDhRUv37KlAhLibZU9ZUsSYo5HCrc6PkwWtdTOCX9RDjaazbhuFIhOx1JQFAJaRgPn0KJvQduK6hzfvDzJ5KReGM5to9MHoXNYUso4Im4GTOPErjxgEU6xJig6xEiMEuCkxKyqul7ahuQKlveu7PrWR41HUDTNG0nQXsI67FlhW6GjulZ7ge+GvqMKhfpMv5cv+vZLDBjjrI8qSpN4HgivsLhTnxKTwUhmILpsHjqm86GURQzKsqotYPsenBnoIa5FqpLJslID5vh+rHqN+XbcqAiyCZcLi2OBWguIhzgbJO2JLJ4XjyrK7juS5mSpGhFEGWpxmaTIrCEfUjQtMo9bkVeNIRRpjCmSx4xWRx3YAZ4CIXCsjx+Kq3hSl5kaxL5RL9mKzxIS5-ihSlnBpS+l6xUCECsBYsDKCCFC4K07LVAAFGqqwAJSsIW17tUxnW1PUkDWVxtmIF4A7xEhYpIV4zhxH4U7xFsVyubsjhEo8yYuIpmrKeFRnpdIS1EX8ZoGGAkCYAAqgYa1hhtCCOKkDgBcmC5NaVxyVbE-gUPEMHePBmKZjsuQaqQ6BwOYc00qUHWyIDPbA8sWipFcEMLjs8SYhsEm2L5cSCRTQngVsLwavjXx0r8EAkwBpWXKjsrzgFYq7OJlX4hQaQbO4-g3AdyQtRh-SSFFLCYF1q25TZvJLMViKrLiM4rPBqSw6c1g7AixLDjOJJPF4asqbeZZ0Y+FpWjanqNsogvcZGyYm7YLkUwSO3HZVVuXKO8YKf2sqBFzSlhdeHs4fReFDBgQdk0JfFBJsTlJGDSLolOQFXBKKTbK5OzCm7BlZ7RD4F4byxWzGLhxgmFNBKk0E7LXV07CsAT+PYLfzc9JkyJ3iyeHxV1pF4qqKxKLgVTbzhrHssQHLKhwz9z+lz+pRM68t3VL4g9hyhO2x2-iSPQdVMSPPsGzOOcp2zzEPfI2dNe790TEPKcmI5TPHDkicCHgkjuExtkIAA */
  createMachine(
    {
      context: {
        todos: [] as string[],
        errorMessage: undefined as string | undefined,
        createNewTodoFormInput: "",
      },
      tsTypes: {} as import("./todoAppMachine.typegen").Typegen0,
      schema: {
        services: {} as {
          loadTodos: {
            data: string[];
          };
          saveTodo: {
            data: void;
          };
          deleteTodo: {
            data: void;
          };
        },
        events: {} as
          | {
              type: "Create new";
            }
          | {
              type: "Form input change";
              value: string;
            }
          | {
              type: "Submit";
            }
          | {
              type: "Delete";
              todo: string;
            }
          | {
              type: "Speed up";
            },
      },
      predictableActionArguments: true,
      id: "Todo Machine",
      initial: "Loading Todos",
      states: {
        "Loading Todos": {
          invoke: {
            src: "loadTodos",
            onDone: [
              {
                actions: "assignTodosToContext",
                target: "Todos Loaded",
              },
            ],
            onError: [
              {
                actions: "assignErrorToContext",
                target: "Loading todos errored",
              },
            ],
          },
        },
        "Todos Loaded": {
          on: {
            "Create new": {
              target: "Create new todo",
            },
            Delete: {
              target: "Deleting todo",
            },
          },
        },
        "Loading todos errored": {},
        "Create new todo": {
          initial: "Showing form input",
          states: {
            "Showing form input": {
              on: {
                "Form input change": {
                  actions: "assignFormInputToContext",
                },
                Submit: {
                  target: "Saving Todo",
                },
              },
            },
            "Saving Todo": {
              invoke: {
                src: "saveTodo",
                onDone: [
                  {
                    target: "#Todo Machine.Loading Todos",
                  },
                ],
                onError: [
                  {
                    actions: "assignErrorToContext",
                    target: "Showing form input",
                  },
                ],
              },
            },
          },
        },
        "Deleting todo": {
          invoke: {
            src: "deleteTodo",
            onDone: [
              {
                target: "Loading Todos",
              },
            ],
            onError: [
              {
                actions: "assignErrorToContext",
                target: "Deleting Todo errored",
              },
            ],
          },
        },
        "Deleting Todo errored": {
          after: {
            "2500": {
              target: "Todos Loaded",
            },
          },
          on: {
            "Speed up": {
              target: "Todos Loaded",
            },
          },
        },
      },
    },
    {
      actions: {
        assignTodosToContext: assign((context, event) => {
          return {
            todos: event.data,
          };
        }),
        assignErrorToContext: assign((context, event) => {
          return {
            errorMessage: (event.data as Error).message,
          };
        }),
        assignFormInputToContext: assign((context, event) => {
          return {
            createNewTodoFormInput: event.value,
          };
        }),
      },
    }
  );
