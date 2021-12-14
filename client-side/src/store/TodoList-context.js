import { createContext, useState } from "react";

const TodoListConstext = createContext({
  todos: [],
  addTodo: (todo) => {},
  removeTodo: (todoId) => {},
});

export function TodoListConstextProvider(props) {
  const [userTodos, setUserTodos] = useState([]);

  function addTodoHandler(todo) {
    setUserTodos((prevUserTodos) => {
      prevUserTodos.push(todo);
      console.log(prevUserTodos);
    });
  }

  function removeTodoHandler(todoId) {
    setUserTodos((prevUserTodos) => {
      return prevUserTodos.filter((todo) => todo.id !== todoId);
    });
  }

  const context = {
    todos: userTodos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoListConstext.Provider value={context}>
      {props.children}
    </TodoListConstext.Provider>
  );
}

export default TodoListConstext;
