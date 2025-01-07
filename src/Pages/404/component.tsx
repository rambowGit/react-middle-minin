import { Link } from "react-router-dom";
import { appRoutes } from "../../Types/routes";

const NotFound = () => {
  return ( 
    <h2>
      Страница не найдена.
      <div>
        <Link to={`${appRoutes.home}`} replace>вернуться</Link>
      </div>
    </h2> );
}
 
export default NotFound;