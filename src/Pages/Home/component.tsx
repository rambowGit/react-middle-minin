import { useState } from 'react';
import TextInputControls from '../../components/TextInputControls/component';
import styles from './styles.module.scss';

const Home: React.FC = () => {
  const [isControls, setIsControls] = useState<boolean>(false);
  const [isLogin, setisLogin] = useState<boolean>(false);
  
  const onControls = () => {
    setIsControls( (prev) => !prev);
  }
  
  const onLogin = () => {
    setisLogin((prev) => !prev);
  }
  
  return ( 
    <div className={styles.root}>
      <section className={styles.sectionLeft}>
        <div className={styles.btn__center}>
          <button onClick={onLogin}>Login</button>
        </div>
      </section>
      <section className={styles.sectionRight}>
        {!isControls && <div className={styles.btn__center}>
          <button onClick={onControls}>Input config</button>
        </div>}
        {isControls && <TextInputControls />}
      </section>
    </div>
   );
}
 
export default Home;