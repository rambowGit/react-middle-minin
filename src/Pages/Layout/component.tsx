import Header from '../../Components/UI/Header/component';
import MainContent from '../MainContent/component';
import styles from './styles.module.scss';

const Layout: React.FC = () => {
  
  return ( 
    <div className={styles.root}>
      <header className={styles.header}>
        <Header />
      </header>
      
      <main className={styles.content}>
        <MainContent />
      </main>
    </div>
   );
}
 
export default Layout;