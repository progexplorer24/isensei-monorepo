import type { NextPage } from "next";
import { useMachine } from "@xstate/react";
import { machine } from "../machines/todoAppMachine";

const todos = new Set<string>(["Takes bins out", "Do laundry"]);

const Home: NextPage = () => {
  const [state, send] = useMachine(machine, {
    services: {
      loadTodos: async () => {
        return Array.from(todos);
      },
      saveTodo: async (context, event) => {
        todos.add(context.createNewTodoFormInput);
      },
      deleteTodo: async (context, event) => {
        throw new Error("Oh no!");
        todos.delete(event.todo);
      },
    },
  });
  return (
    <div>
      <pre>{JSON.stringify(state.value)}</pre>
      <pre>{JSON.stringify(state.context)}</pre>
      <div>
        {state.matches("Todos Loaded") && (
          <>
            {state.context.todos.map((todo) => (
              <div key={todo}>
                <p>{todo}</p>
                <button
                  onClick={() =>
                    send({
                      type: "Delete",
                      todo,
                    })
                  }
                >
                  Delete
                </button>
              </div>
            ))}
          </>
        )}
        {state.matches("Todos Loaded") && (
          <button
            onClick={() =>
              send({
                type: "Create new",
              })
            }
          >
            Create New
          </button>
        )}
        {state.matches("Deleting Todo errored") && (
          <>
            <p>Something went wrong: {state.context.errorMessage}</p>
            <button
              onClick={() =>
                send({
                  type: "Speed up",
                })
              }
            >
              Go back to list
            </button>
          </>
        )}
        {state.matches("Create new todo.Showing form input") && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send({
                type: "Submit",
              });
            }}
          >
            <input
              type="text"
              onChange={(e) =>
                send({
                  type: "Form input change",
                  value: e.target.value,
                })
              }
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;
