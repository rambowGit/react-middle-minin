import { useNavigate } from "react-router-dom";
import Card from "../../Components/UI/Card/component";
import { Character } from "../../Types/character";
import { appRoutes } from "../../Types/routes";
import styles from "./styles.module.scss";

type Props = {
  characters: Array<Character>;
};

const Characters = ({ characters }: Props) => {
  const navigate = useNavigate();

  const onNavigate = (character: Character) => {
    navigate(`${appRoutes.characters}/${character.id}`, {
      state: {
        character
      }
    });  
  } 
  
  return (
    <div className={styles.root}>
      {characters.map((c) => (
        <div key={c.id} style={{margin: '12px'}}>
          <Card>
            <div className={styles.container}>
              <div>
                <img
                  src={c.image}
                  className={styles.img}
                  alt={`image ${c.id}`}
                />
              </div>
              <div className={styles.items}>
                <h3 className={styles.item}>
                  {c.name}
                </h3>
                <div className={styles.item} onClick={() => onNavigate(c)}>
                  <span className={styles.item__more}>Подробнее.. </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Characters;
