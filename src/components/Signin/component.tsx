import cn from 'classnames';
import { FormEvent, useRef, useState } from 'react';
import PasswordInput from '../PasswordInput/component';
import TextInput from '../TextInput/component';
import { Radius, SigninForm, Size, Variant } from '../Types/types';
import styles from './styles.module.scss';

const emptyForm: SigninForm = {
  login: '',
  password: '',
}

type Props = {
  onSubmit: (form: SigninForm) => void
}

const Signin: React.FC<Props> = ({ onSubmit }) => {
  
  const [form, setForm] = useState<SigninForm>(emptyForm);
  const formRef = useRef<HTMLFormElement|null>(null);

  
  const handleChange = (event: FormEvent) => {
    setForm((prevState) => ({
      ...prevState,
      [(event.target as HTMLInputElement) .name]: (event.target as HTMLInputElement).value,
    }));
  }
  
  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form);
    formRef.current?.reset();
  }
  
  const onResetForm = () => {
    setForm(emptyForm);
  };
  
  return ( 
    <div className={styles.root}>
      <form 
        ref={formRef}
        className={cn(styles.signinForm, 'center')} 
        style={{top: '20rem'}}
        onChange={(e) => handleChange(e)}
        onSubmit={onSubmitForm}
        onReset={onResetForm}
      >
        <TextInput
          id={'login'}
          variant={Variant.Default}
          value={form.login}
          placeholder="email"
          label={'Email'}
          description={'enter email'}
          error={''}
          withAsterisk={true}
          size={Size.md}
          radius={Radius.sm}
          disabled={false}
          withIcon={true}
        />
        
        <PasswordInput
          id={'password'}
          variant={Variant.Default}
          inputValue={form.password}
          placeholder="password"
          label={'Password'}
          description={'enter password'}
          error={''}
          withAsterisk={true}
          size={Size.md}
          radius={Radius.sm}
          disabled={false}
          withIcon={true}
        />
        
        <div className="center" style={{top: '23rem'}}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div> 
  );
}
 
export default Signin;