import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../Components/UI/Card/component";
import data from "../../Data/characters.json";
import { Character } from "../../Types/character";
import styles from "./styles.module.scss";

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const character: Character | undefined = useMemo(() => {
    return data.find((c) => c.id === Number(id));
  }, [id]);
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
};

export default CharacterDetails;
