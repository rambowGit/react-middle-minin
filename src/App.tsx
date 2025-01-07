import { Route, Routes } from "react-router-dom";
import AuthProvider from "./Hoc/AuthProvider";
import PrivateRoute from "./Hoc/PrivateRoute";
import NotFound from "./Pages/404/component";
import CategoriesContainer from "./Pages/Categories/container";
import CharacterDetailsContainer from "./Pages/CharacterDetails/container";
import CharactersContainer from "./Pages/Characters/container";
import EpisodeDetails from "./Pages/EpisodeDetails/component";
import EpisodesContainer from "./Pages/Episodes/container";
import Home from "./Pages/Home/component";
import Layout from "./Pages/Layout/component";
import LocationDetails from "./Pages/LocationDetails/component";
import LocationsContainer from "./Pages/Locations/container";
import Login from "./Pages/Login/component";
import { appRoutes } from "./Types/routes";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path={`${appRoutes.login}`} element={<Login />} />
        <Route path={`${appRoutes.home}`} element={<Layout />}>
          <Route element={<Home />} index />
          <Route 
            path={appRoutes.categories} 
            element={
              <PrivateRoute>
                <CategoriesContainer />
              </PrivateRoute>}
          >
            <Route index element={<CharactersContainer />} />
            <Route
              index
              path={appRoutes.characters}
              element={<CharactersContainer />}
            />
            <Route
              path={`${appRoutes.characters}/:id`}
              element={<PrivateRoute><CharacterDetailsContainer /></PrivateRoute>}
            />
            <Route
              path={appRoutes.locations}
              element={<LocationsContainer />}
            />
            <Route
              path={`${appRoutes.locations}/:id`}
              element={<PrivateRoute><LocationDetails /></PrivateRoute>}
            />
            <Route path={appRoutes.episodes} element={<EpisodesContainer />} />
            <Route
              path={`${appRoutes.episodes}/:id`}
              element={<PrivateRoute><EpisodeDetails /></PrivateRoute>}
            />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
