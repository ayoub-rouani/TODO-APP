import MyButton from "./MyButton";

function ConfirmModal(props) {
  function cancelHandler() {
    props.onCancelClicked();
  }

  function deleteHandler() {
    props.onDeleteClicked();
  }

  return (
    <div className="modal">
      <h2>Delete Confirmation</h2>
      <div className="actions">
        <MyButton text="Cancel" className="btn_alt" onClick={cancelHandler} />
        <MyButton text="Confirm" className="btn" onClick={deleteHandler} />
      </div>
    </div>
  );
}

export default ConfirmModal;
