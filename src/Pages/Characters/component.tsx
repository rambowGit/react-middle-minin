import { Character } from "../../Types/character";
import styles from './styles.module.scss';

type Props = {
  characters: Array<Character>
}

const Characters: React.FC<Props> = ({ characters }) => {
  return ( 
  <div className={styles.root}>
    {characters.map((c) => (
      <ul key={c.id}>
        <li>
          <div className={styles.image}>
            <img src={c.image} />  
          </div>
          <div>
           {c.name}
          </div>
          
        </li>
      </ul>
    ))}
  </div>
   );
}
 
export default Characters;