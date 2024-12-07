import cn from 'classnames';
import TextInput from '../TextInput/component';
import { Radius, Size, Variant } from '../Types/types';
import styles from './styles.module.scss';

const Signin: React.FC = () => {
  return ( 
    <div className={styles.root}>
      <form className={cn(styles.signinForm, 'center')} style={{top: '20rem'}}>
        <TextInput
          variant={Variant.Default}
          inputValue={""}
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
        <TextInput
          variant={Variant.Default}
          inputValue={""}
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
      </form>
    </div> 
  );
}
 
export default Signin;