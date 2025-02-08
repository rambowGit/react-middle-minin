import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../Components/UI/Card/component";
import { Character } from "../../Types/character";
import styles from "./styles.module.scss";


const CharacterDetails = () => {

  const navigate = useNavigate();
  const { state } = useLocation();
  const character: Character = state.character;

  return (
    character && ( <div className={styles.root}>
      <Card>
        <div className={styles.container}>
          <div>
            <img
              src={character.image}
              className={styles.img}
              alt={`image ${character.id}`}
            />
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <span className={styles.item__title}>Имя: </span>
              {character.name}
            </div>
            <div className={styles.item}>
              <span className={styles.item__title}>Пол: </span>
              {character.gender}
            </div>
            <div className={styles.item}>
              <span className={styles.item__title}>Расса: </span>
              {character.species}
            </div>
            <div className={styles.item}>
              <span className={styles.item__title}>Статус: </span>
              {character.status}
            </div>
            <div className={styles.item} onClick={() => navigate(-1)}>
              <span className={styles.item__back}>Назад </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
    )
  );
}
 
export default CharacterDetails;