import Card from "../../Components/UI/Card/component";
import { Episode } from "../../Types/episode";
import styles from "./styles.module.scss";

type Props = {
  episodes: Array<Episode>;
};

const Episodes: React.FC<Props> = ({ episodes }) => {
  return (
    <div className={styles.root}>
      {episodes.map((e) => (
        <div key={e.id} style={{margin: '12px'}}>
          <Card>
            <div className={styles.container}>
              <div>
                <div className={styles.item}>
                  <span className={styles.item__title}>Название: </span>
                  {e.name}
                </div>
                <div className={styles.item}>
                  <span className={styles.item__title}>Дата релиза: </span>
                  {e.air_date}
                </div>
                <div className={styles.item}>
                  <span className={styles.item__title}>Эпизод: </span>
                  {e.episode}
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Episodes;
