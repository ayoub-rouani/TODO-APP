import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import BackgroundDismis from "./BackgroundDismis";
import MyButton from ".//MyButton";
import Css from "../css/Todo.module.css";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeConfirmModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className={Css.card}>
      <h2>{props.titel}</h2>
      <p> {props.description} </p>

      <div className={Css.actions}>
        <MyButton text="X" className="btn_alt" onClick={deleteHandler} />
      </div>
      {modalIsOpen && (
        <ConfirmModal
          onDeleteClicked={closeConfirmModalHandler}
          onCancelClicked={closeConfirmModalHandler}
        />
      )}
      {modalIsOpen && (
        <BackgroundDismis onBackGroudClicked={closeConfirmModalHandler} />
      )}
      <span className={Css.so_titel}>created on {props.createDatetime} </span>
    </div>
  );
}

export default Todo;
