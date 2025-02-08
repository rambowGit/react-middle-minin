import { useRoutes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import CategoriesContainer from "./Pages/Categories/container";
import Home from "./Pages/Home/component";
import Layout from "./Pages/Layout/component";
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
              path: `${appRoutes.categories}/:type`,
              element: <CategoriesContainer />
            },
            {
              path: `${appRoutes.categories}/:type/:id`,
              element: <CategoriesContainer />
            },
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
    //       index
    //       element={<Home />}
    //     />
    //     <Route path={appRoutes.categories} element={<CategoriesContainer />}>
    //     <Route
    //         index
    //         element={<CharactersContainer />}
    //       />
    //       <Route
    //         index
    //         path={`${appRoutes.categories}/:type`}
    //         element={<CharactersContainer />}
    //       />
    //        <Route
    //         path={`${appRoutes.categories}/:type/:id`}
    //         element = {<CategoriesContainer />}
    //       />
    //        <Route
    //         path={`${appRoutes}/:type/:id`}
    //         element={<LocationDetails />}
    //       />
    //       <Route
    //         path={`${appRoutes}/:type/:id`}
    //         element={<EpisodeDetails />}
    //       />
    //     </Route>
    //   </Route>      
    // </Routes>
  );
}

export default App
