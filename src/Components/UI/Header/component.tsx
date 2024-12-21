import { NavLink } from "react-router-dom";
import { appRoutes } from "../../../Types/routes";
import styles from './styles.module.scss';

type Props = {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  return ( 
    <nav className={className}>
      <ul className={styles.navList}>
          <li>
            <NavLink
              className={({isActive}) => isActive ? 'activeLink' : ''}
              to={appRoutes.home}
            >
              Home
              </NavLink>
          </li>
          <li>
            <NavLink
             className={({isActive}) => isActive ? 'activeLink' : ''}
             to={appRoutes.categories}
            >
              Categories
            </NavLink>
          </li>
        </ul>
    </nav>
   );
}
 
export default Header;