import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../Components/UI/Card/component";
import { Episode } from "../../Types/episode";
import styles from "./styles.module.scss";

const EpisodeDetails: React.FC = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const episode: Episode = state.episode;

  return (
    episode && (
      <div className={styles.root}>
        <Card>
          <div className={styles.container}>
              <div className={styles.item}>
                <span className={styles.item__title}>Название: </span>
                {episode.name}
              </div>
              <div className={styles.item}>
                <span className={styles.item__title}>Дата релиза: </span>
                {episode.air_date}
              </div>
              <div className={styles.item}>
                <span className={styles.item__title}>Эпизод: </span>
                {episode.episode}
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

export default EpisodeDetails;
