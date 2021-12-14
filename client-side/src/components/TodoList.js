import { useState } from "react";
import MyButton from ".//MyButton";
import AddNewTodoForm from "../components/AddNewTodoForm";
import BackgroundDismis from "./BackgroundDismis";
import Todo from "../components/Todo";
import Css from "../css/TodoList.module.css";

function TodoList(props) {
  const [addFormIsOpen, setAddFormIsOpen] = useState(false);

  function addTodoHandler() {
    setAddFormIsOpen(true);
  }

  function closeFormModalHandler() {
    setAddFormIsOpen(false);
  }

  return (
    <>
      <div className={Css.todo_list_container}>
        <div className={Css.card_hader}>
          <div className={Css.title_section}>
            <h2 className={Css.card_titel}>{props.list_props.title}</h2>
          </div>
          <div className={Css.btn_section}>
            <MyButton text="+" className="btn" onClick={addTodoHandler} />
          </div>
        </div>
        <div className={Css.card_body}>
          {props.todo_data.map((todo) => {
            // todoListCtx.addTodo({ todo });
            return (
              <Todo
                key={todo.todoId}
                todoId={todo.todoId}
                titel={todo.titel}
                description={todo.description}
                createDatetime={todo.create_datetime}
              />
            );
          })}
        </div>
      </div>
      {addFormIsOpen && <AddNewTodoForm />}
      {addFormIsOpen && (
        <BackgroundDismis onBackGroudClicked={closeFormModalHandler} />
      )}
    </>
  );
}

export default TodoList;
