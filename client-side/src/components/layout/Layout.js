import MainNavigation from "./MainNavigation";
import Css from "../../css/Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={Css.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
