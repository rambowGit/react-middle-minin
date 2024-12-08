import { useState } from 'react';
import Signin from '../../components/Signin/component';
import Signup from '../../components/Signup/component';
import TextInputControls from '../../components/TextInputControls/component';
import { SigninForm, SignupForm } from '../../components/Types/types';
import styles from './styles.module.scss';

const Home: React.FC = () => {
  const [isControls, setIsControls] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  
  const onShowControls = () => {
    setIsLogin(false);
    setIsRegistration(false);
    setIsControls(true);
  }
  
  const onShowLogin = () => {
    setIsLogin(true);
    setIsRegistration(false);
    setIsControls(false);
  }

  const onShowRegistration = () => {
    setIsLogin(false);
    setIsRegistration(true);
    setIsControls(false);
  }
  
  const onSubmit = (form: SigninForm | SignupForm) => {
    alert(JSON.stringify(form));
  }
  
  
  return ( 
    <div className={styles.root}>
      <nav className={styles.header}>
        <div>
          <button onClick={onShowLogin}>Login</button>
        </div>
        <div>
          <button onClick={onShowRegistration}>Registration</button>
        </div>
        <div>
          <button onClick={onShowControls}>Input config</button>
        </div>
      </nav>
      
      <section className={styles.content}>
        {isLogin && <Signin onSubmit={onSubmit}/>}
        {isRegistration && <Signup onSubmit={onSubmit}/>}
        {isControls && <TextInputControls />}
      </section>
    </div>
   );
}
 
export default Home;