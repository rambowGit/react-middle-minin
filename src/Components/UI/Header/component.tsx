import { Link } from "react-router-dom";
import { appRoutes } from "../../../Types/routes";
import styles from './styles.module.scss';

type Props = {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  return ( 
    <nav className={className}>
      <ul className={styles.navList}>
          <li><Link to={appRoutes.home}>Home</Link></li>
          <li><Link to={appRoutes.categories}>Categories</Link></li>
        </ul>
    </nav>
   );
}
 
export default Header;