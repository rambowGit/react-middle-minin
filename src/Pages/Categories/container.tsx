import { useParams } from "react-router-dom";
import { CategoryTypes } from "../../Types/routes";
import Categories from "./component";

const CategoriesContainer = () => {
  const {type, id} = useParams();
  
  return (
    <Categories type={type as CategoryTypes} id={id} />
   );
}
 
export default CategoriesContainer;