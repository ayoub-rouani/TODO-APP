import { useRef, useContext } from "react";
import Axios from "axios";
import MyButton from "./MyButton";
import Css from "../css/AddNewTodoForm.module.css";
import TodoListConstext from "../store/TodoList-context";

function AddNewTodoForm() {
  const todoListCtx = useContext(TodoListConstext);
  const titelInputRef = useRef();
  const descriptionInputRef = useRef();

  function sabmitHandler(event) {
    event.preventDefault();

    const titel = titelInputRef.current.value;
    const description = descriptionInputRef.current.value;

    if (titel === "" || description === "") {
      alert("data can not b e null");
    } else {
      const data = {
        titel: titel,
        description: description,
        test: {},
      };

      Axios.post("http://localhost:3001/api/add_todo", data).then((result) => {
        if (+result.data.res === 1) {
          alert("Insert Done!");
          const data = result.data.data;
          todoListCtx.addTodo({
            create_datetime: data.create_datetime,
            created_by_userId: data.created_by_userId,
            description: data.description,
            due_date: data.due_date,
            listId: data.listId,
            priority: data.priority,
            start_date: data.start_date,
            status: data.status,
            titel: data.titel,
            todoId: data.todoId,
          });
        } else alert("Insert Error!!!!");
      });
    }
  }
  return (
    <div className={Css.modal}>
      <h2>Add new To-do</h2>
      <form onSubmit={sabmitHandler}>
        <label htmlFor="titel">Titel</label>
        <input
          ref={titelInputRef}
          className={Css.input_txt}
          type="text"
          id="titel"
          name="titel"
          placeholder="Titel of yours Task"
        ></input>

        <label htmlFor="description">Description</label>
        <textarea
          ref={descriptionInputRef}
          className={Css.input_txt}
          type="text"
          id="description"
          name="description"
          placeholder="Discribe your tasck"
          rows="5"
        />

        <div className={Css.actions}>
          <MyButton text="Save" className="btn" />
        </div>
      </form>
    </div>
  );
}

export default AddNewTodoForm;
