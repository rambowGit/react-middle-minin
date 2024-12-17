import { Link, Outlet } from "react-router-dom";
import { appRoutes } from "../../Types/routes";
import styles from "./styles.module.scss";

const Categories: React.FC = () => {
  return (
    <div>
      <h2>Категории</h2>
      <section className={styles.root}>
        <div className={styles.sideBar}>
          <ul>
            <li>
              <Link to={appRoutes.characters}>Персонажи</Link>
            </li>
            <li>
              <Link to={appRoutes.locations}>Расположение</Link>
            </li>
            <li>
              <Link to={appRoutes.episodes}>Эпизоды</Link>
            </li>
          </ul>
        </div>

        <div className={styles.content}>
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Categories;
