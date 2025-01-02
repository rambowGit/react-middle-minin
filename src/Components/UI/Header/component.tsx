import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Hooks/auth";
import { appRoutes } from "../../../Types/routes";
import styles from './styles.module.scss';

type Props = {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  
  const handleSignout = () => {
    auth?.signOut(() => {
      navigate(appRoutes.home);
    });
  }
  
  return ( 
    <nav className={className}>
      <ul className={styles.navList}>
          <div className={styles.menu}>
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
          </div>
          <div className={styles.signout}>
          <li className={styles.signout} onClick={handleSignout}>
           Выйти
          </li>
          </div>
        
        </ul>
    </nav>
   );
}
 
export default Header;