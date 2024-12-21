import { useNavigate } from "react-router-dom";
import Card from "../../Components/UI/Card/component";
import { Character } from "../../Types/character";
import { appRoutes } from "../../Types/routes";
import styles from "./styles.module.scss";

type Props = {
  characters: Array<Character>;
};

const Characters: React.FC<Props> = ({ characters }) => {
  const navigate = useNavigate();
  
  const onNavigate = (id: string) => {
    navigate(appRoutes.character(id));  
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
                <div className={styles.item}>
                  <span className={styles.item__title}>Имя: </span>
                  {c.name}
                </div>
                <div className={styles.item}>
                  <span className={styles.item__title}>Пол: </span>
                  {c.gender}
                </div>
                <div className={styles.item}>
                  <span className={styles.item__title}>Расса: </span>
                  {c.species}
                </div>
                <div className={styles.item}>
                  <span className={styles.item__title}>Статус: </span>
                  {c.status}
                </div>
                <div className={styles.item} onClick={() => onNavigate(String(c.id))}>
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
