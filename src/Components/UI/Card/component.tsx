import cn from 'classnames';
import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<Props> = ({children, className}) => {
  return ( 
    <div className={cn(styles.root, className)}>
      {children}
    </div>
   );
}


export default Card;