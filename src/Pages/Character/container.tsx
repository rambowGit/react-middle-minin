import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/UI/Card/component";
import data from '../../Data/characters.json';
import { Character } from '../../Types/character';
import styles from './styles.module.scss';


const CharacterDetails = () => {
  const {id} = useParams();
  const character: Character = useMemo(() => {
    return data.find((c) => c.id === Number(id));
  }, [id])
  return ( 
  <div>
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
              </div>
            </div>
          </Card>
  </div> );
}
 
export default CharacterDetails;