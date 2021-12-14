import { Link } from "react-router-dom";

import Css from "../../css/MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={Css.header}>
      <div className={Css.logo}>ToDo</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user_info">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
