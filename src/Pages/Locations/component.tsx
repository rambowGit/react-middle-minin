import Card from "../../Components/UI/Card/component";
import { Location } from "../../Types/location";
import styles from "./styles.module.scss";

type Props = {
  locations: Array<Location>;
};

const Locations: React.FC<Props> = ({ locations }) => {
  return (
    <div className={styles.root}>
      {locations.map((l) => (
        <div key={l.id} style={{margin: '12px'}}>
          <Card>
            <div className={styles.container}>
              <div>
                <div className={styles.item}>
                  <span className={styles.item__title}>Название: </span>
                  {l.name}
                </div>
                <div className={styles.item}>
                  <span className={styles.item__title}>Измерение: </span>
                  {l.dimension}
                </div>
                <div className={styles.item}>
                  <span className={styles.item__title}>Тип: </span>
                  {l.type}
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Locations;
