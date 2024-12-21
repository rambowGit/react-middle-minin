import { NavLink, Outlet } from "react-router-dom";
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
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to={appRoutes.characters}
              >
                Персонажи
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to={appRoutes.locations}
              >
                Расположение
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to={appRoutes.episodes}
              >
                Эпизоды
              </NavLink>
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
