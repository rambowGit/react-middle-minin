import { Route, Routes } from "react-router-dom";
import AuthProvider from "./Hoc/AuthProvider";
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
  return (
    <AuthProvider>
      <Routes>
        <Route path={`${appRoutes.home}`} element={<Layout />}>
          <Route element={<Home />} index />
          <Route path={appRoutes.categories} element={<CategoriesContainer />}>
            <Route index element={<CharactersContainer />} />
            <Route
              index
              path={appRoutes.characters}
              element={<CharactersContainer />}
            />
            <Route
              path={`${appRoutes.characters}/:id`}
              element={<CharacterDetailsContainer />}
            />
            <Route
              path={appRoutes.locations}
              element={<LocationsContainer />}
            />
            <Route
              path={`${appRoutes.locations}/:id`}
              element={<LocationDetails />}
            />
            <Route path={appRoutes.episodes} element={<EpisodesContainer />} />
            <Route
              path={`${appRoutes.episodes}/:id`}
              element={<EpisodeDetails />}
            />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
