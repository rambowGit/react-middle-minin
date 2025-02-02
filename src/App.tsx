import { useRoutes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import CategoriesContainer from "./Pages/Categories/container";
import CharacterDetailsContainer from "./Pages/CharacterDetails/container";
import CharactersContainer from "./Pages/Characters/container";
import EpisodeDetails from "./Pages/EpisodeDetails/component";
import EpisodesContainer from "./Pages/Episodes/container";
import Home from "./Pages/Home/component";
import Layout from "./Pages/Layout/component";
import LocationDetails from "./Pages/LocationDetails/component";
import LocationsContainer from "./Pages/Locations/container";
import { appRoutes } from "./Types/routes";


function App() {

  const routes = useRoutes([
    {
      path: appRoutes.home, 
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: appRoutes.categories,
          element: <CategoriesContainer />,
          children: [
            {
              index: true,
              element: <CharactersContainer />
            },
            {
              index: true,
              path: appRoutes.characters,
              element: <CharactersContainer />
            },
            {
              path: `${appRoutes.characters}/:id`,
              element: <CharacterDetailsContainer />
            },
            {
              path: appRoutes.locations,
              element: <LocationsContainer />
            },
            {
              path: `${appRoutes.locations}/:id`,
              element: <LocationDetails />
            },
            {
              path: appRoutes.episodes,
              element: <EpisodesContainer />
            },
            {
              path: `${appRoutes.episodes}/:id`,
              element: <EpisodeDetails />
            }
          ]
        }
      ]
    },
    
  ]);
  return (
    <Fragment>
      {routes}
    </Fragment>
    
    // <Routes>
    //   <Route path={`${appRoutes.home}`} element={<Layout />}>
    //     <Route
    //       element={<Home />}
    //       index
    //     />
    //     <Route path={appRoutes.categories} element={<CategoriesContainer />}>
    //     <Route
    //         index
    //         element={<CharactersContainer />}
    //       />
    //       <Route
    //         index
    //         path={appRoutes.characters}
    //         element={<CharactersContainer />}
    //       />
    //        <Route
    //         // path={`${appRoutes}/:type/:id`}
    //         path={`${appRoutes.characters}/:id`}
    //         element={<CharacterDetailsContainer />}
    //       />
    //       <Route
    //         path={appRoutes.locations}
    //         element={<LocationsContainer />}
    //       />
    //        <Route
    //         // path={`${appRoutes}/:type/:id`}
    //         path={`${appRoutes.locations}/:id`}
    //         element={<LocationDetails />}
    //       />
    //       <Route
    //         path={appRoutes.episodes}
    //         element={<EpisodesContainer />}
    //       />
    //       <Route
    //         // path={`${appRoutes}/:type/:id`}
    //         path={`${appRoutes.episodes}/:id`}
    //         element={<EpisodeDetails />}
    //       />
    //     </Route>
    //   </Route>      
    // </Routes>
  );
}

export default App
