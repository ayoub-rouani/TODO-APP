import Css from "../css/MyButton.module.css";

function MyButton(props) {
  let btnClass = props.className === "btn" ? Css.btn : Css.btn_alt;

  return (
    <button className={btnClass} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default MyButton;
