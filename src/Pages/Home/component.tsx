import { useState } from 'react';
import TextInputControls from '../../components/TextInputControls/component';
import styles from './styles.module.scss';
import Signin from '../../components/Signin/component';

const Home: React.FC = () => {
  const [isControls, setIsControls] = useState<boolean>(false);
  const [isLogin, setisLogin] = useState<boolean>(false);
  
  const onControls = () => {
    setisLogin(false);
    setIsControls(true);
  }
  
  const onLogin = () => {
    setisLogin(true);
    setIsControls(false);
  }

  
  return ( 
    <div className={styles.root}>
      <nav className={styles.header}>
        <div>
          <button onClick={onLogin}>Login</button>
        </div>
        <div>
          <button onClick={onControls}>Input config</button>
        </div>
      </nav>
      
      <section className={styles.content}>
        {isLogin && <Signin />}
        {isControls && <TextInputControls />}
      </section>
    </div>
   );
}
 
export default Home;