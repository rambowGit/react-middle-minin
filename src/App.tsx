import { Route, Routes } from "react-router-dom";
import CategoriesContainer from "./Pages/Categories/container";
import CharactersContainer from "./Pages/Characters/container";
import EpisodesContainer from "./Pages/Episodes/container";
import Home from "./Pages/Home/component";
import Layout from "./Pages/Layout/component";
import LocationsContainer from "./Pages/Locations/container";
import { appRoutes } from "./Types/routes";


function App() {

  return (
    <Routes>
      <Route path={`${appRoutes.home}`} element={<Layout />}>
        <Route
          element={<Home />}
          index
        />
        <Route path={appRoutes.categories} element={<CategoriesContainer />}>
          <Route
            path={appRoutes.characters}
            element={<CharactersContainer />}
          />
          <Route
            path={appRoutes.locations}
            element={<LocationsContainer />}
          />
          <Route
            path={appRoutes.episodes}
            element={<EpisodesContainer />}
          />
        </Route>
      </Route>      
    </Routes>
  );
}

export default App
