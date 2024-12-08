import cn from 'classnames';
import { FormEvent, useRef, useState } from 'react';
import PasswordInput from '../PasswordInput/component';
import RadioInput from '../RadioInput/component';
import TextInput from '../TextInput/component';
import { Gender, Radius, SignupForm, Size, Variant } from '../Types/types';
import styles from './styles.module.scss';

const emptyForm: SignupForm = {
  name: '',
  nickName: '',
  email: '',
  gender: null,
  password: '',
  passwordRepeat: '',
}

type Props = {
  onSubmit: (form: SignupForm) => void
}

const Signup: React.FC<Props> = ({ onSubmit }) => {
  
  const [form, setForm] = useState<SignupForm>(emptyForm);
  const formRef = useRef<HTMLFormElement|null>(null);

  
  const handleChange = (event: FormEvent) => {
    setForm((prevState) => ({
      ...prevState,
      [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value,
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
        style={{top: '26rem'}}
        onChange={(e) => handleChange(e)}
        onSubmit={onSubmitForm}
        onReset={onResetForm}
      >
        <TextInput
          id={'name'}
          variant={Variant.Default}
          value={form.name}
          placeholder="name"
          label={'Name'}
          description={'enter name'}
          error={''}
          withAsterisk={true}
          size={Size.md}
          radius={Radius.sm}
          disabled={false}
          withIcon={false}
        />
        <TextInput
          id={'nickName'}
          variant={Variant.Default}
          value={form.nickName}
          placeholder="nickname"
          label={'Nickname'}
          description={'enter nickname'}
          error={''}
          withAsterisk={true}
          size={Size.md}
          radius={Radius.sm}
          disabled={false}
          withIcon={true}
        />
        <TextInput
          id={'email'}
          variant={Variant.Default}
          value={form.email}
          placeholder="email"
          label={'Email'}
          description={'enter email'}
          error={''}
          withAsterisk={true}
          size={Size.md}
          radius={Radius.sm}
          disabled={false}
          withIcon={false}
        />
        <RadioInput
          id={'gender'}
          variant={Variant.Default}
          values={[Gender.Male, Gender.Female]}
          label={'Gender'}
          description={'enter gender'}
          error={''}
          withAsterisk={true}
          size={Size.md}
          radius={Radius.sm}
          disabled={false}
          onInput={handleChange}
        />
        
        <PasswordInput
          id={'password'}
          variant={Variant.Default}
          value={form.password}
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
        <PasswordInput
          id={'passwordRepeat'}
          variant={Variant.Default}
          value={form.passwordRepeat}
          placeholder="repeat password"
          label={'Repeat password'}
          description={''}
          error={''}
          withAsterisk={true}
          size={Size.md}
          radius={Radius.sm}
          disabled={false}
          withIcon={true}
        />
        
        <div className="center" style={{top: '51rem'}}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div> 
  );
}
 
export default Signup;