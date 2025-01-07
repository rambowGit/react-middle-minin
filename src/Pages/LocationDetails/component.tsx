import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../Components/UI/Card/component";
import { Location } from "../../Types/location";
import styles from "./styles.module.scss";

const LocationDetails: React.FC = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const location: Location = state.location;

  return (
    location && (
      <div className={styles.root}>
        <Card>
          <div className={styles.container}>
            <div className={styles.item}>
              <span className={styles.item__title}>Название: </span>
              {location.name}
            </div>
            <div className={styles.item}>
              <span className={styles.item__title}>Измерение: </span>
              {location.dimension}
            </div>
            <div className={styles.item}>
              <span className={styles.item__title}>Тип: </span>
              {location.type}
            </div>
            <div className={styles.item} onClick={() => navigate(-1)}>
              <span className={styles.item__back}>Назад </span>
            </div>
          </div>
        </Card>
      </div>
    )
  );
};
export default LocationDetails;
