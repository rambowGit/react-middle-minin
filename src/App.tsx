import { Route, Routes } from "react-router-dom";
import CategoriesContainer from "./Pages/Categories/container";
import Home from "./Pages/Home/component";
import Layout from "./Pages/Layout/component";
import { appRoutes } from "./Types/routes";


function App() {

  return (
    <Routes>
      <Route path={`${appRoutes.home}`} element={<Layout />}>
        <Route
          element={<Home />}
          index
        />
        <Route path={appRoutes.categories} element={<CategoriesContainer />} />
      </Route>      
    </Routes>
  );
}

export default App
