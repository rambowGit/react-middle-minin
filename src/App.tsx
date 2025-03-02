import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./Hoc/AuthProvider";
import PrivateRoute from "./Hoc/PrivateRoute";
import Layout from "./Pages/Layout/component";
import Login from "./Pages/Login/component";
import { appRoutes } from "./Types/routes";

const Home = lazy(() => import('./Pages/Home/component'));
const CategoriesContainer = lazy(() => import('./Pages/Categories/container'));
const NotFound = lazy(() => import('./Pages/404/component'));
const CharacterDetailsContainer = lazy(() => import('./Pages/CharacterDetails/container'));
const CharactersContainer = lazy(() => import('./Pages/Characters/container'));
const EpisodeDetails = lazy(() => import('./Pages/EpisodeDetails/component'));
const EpisodesContainer = lazy(() => import('./Pages/Episodes/container'));
const LocationDetails = lazy(() => import('./Pages/LocationDetails/component'));
const LocationsContainer = lazy(() => import('./Pages/Locations/container'));

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
