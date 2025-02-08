import { ReactNode, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { appRoutes, CategoryTypes } from "../../Types/routes";
import CharacterDetails from "../CharacterDetails/component";
import CharactersContainer from "../Characters/container";
import EpisodeDetails from "../EpisodeDetails/component";
import EpisodesContainer from "../Episodes/container";
import LocationDetails from "../LocationDetails/component";
import LocationsContainer from "../Locations/container";
import styles from "./styles.module.scss";

type Props = {
  type: CategoryTypes;
  id?: string;
}
const Categories = ({type, id}: Props) => {
  
  const getCategoryComponent = useCallback((): ReactNode => {
    if (!type) {
      return <CharactersContainer />;
    }
    
    let categoryComponent: ReactNode;
    let categoryDetailsComponent: ReactNode;
    
    switch (type) {
      case CategoryTypes.Characters: {
        categoryComponent = <CharactersContainer />;
        if (id) {
          categoryDetailsComponent = <CharacterDetails />;
        }
        break;
      }
        
      case CategoryTypes.Episodes:
        categoryComponent = <EpisodesContainer />;
        if (id) {
          categoryDetailsComponent = <EpisodeDetails />;
        }
        break;
      default:{
        categoryComponent = <LocationsContainer />;
        if (id) {
          categoryDetailsComponent = <LocationDetails />;
        }
        break;
      }
    }
    
    const finalComponent = categoryDetailsComponent ? categoryDetailsComponent : categoryComponent;
    return finalComponent;
  }, [type, id]); 
  

  
  return (
    <Fragment>
      <h2>Категории</h2>
      <section className={styles.root}>
        <div className={styles.sideBar}>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to={appRoutes.characters}
              >
                Персонажи
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to={appRoutes.locations}
              >
                Расположение
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "")}
                to={appRoutes.episodes}
              >
                Эпизоды
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.content}>
          {getCategoryComponent()}
        </div>
      </section>
    </Fragment>
  );
};

export default Categories;
