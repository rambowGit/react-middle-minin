import cn from 'classnames';
import { useState } from 'react';
import './styles.scss';

type Props = {
  onChecked: (isChecked: boolean) => void
}

const Switch: React.FC<Props> = ({ onChecked: onchecked }) => {
  const [checked, setChecked] = useState<boolean>(false);
  
  const handleChecked = () => {
    setChecked((prev) => {
      onchecked(!prev);
      return !prev;
    });
  }
  
  return ( 
    <>
      <label className='switch'>
        <input type="checkbox" checked={checked} onChange={handleChecked}/>
        <span className={cn('slider', 'round')}></span>
      </label>
    </>
    
   );
}
 
export default Switch;