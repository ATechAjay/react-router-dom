import { Link } from "react-router-dom";
import style from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.list}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Products"}>Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
