import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/auth';
import { UsernameFormElement } from '../../Types/loginForm';
import { appRoutes } from '../../Types/routes';
import styles from './styles.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = (event: React.FormEvent<UsernameFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;

    auth?.signIn({ user: username }, () => {
      navigate(`${appRoutes.home}`);
    });
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="formField">
          <label htmlFor="username">Логин:</label>
          <input id="username" type="text" name="username" />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
