import { Outlet } from 'react-router-dom';
import Header from '../../Components/UI/Header/component';
import styles from './styles.module.scss';

const Layout = () => {
  
  return ( 
    <div className={styles.root}>
      <header className={styles.header}>
        <Header />
      </header>
      
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
   );
}
 
export default Layout;