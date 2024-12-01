import PropTypes from "prop-types";
import { useState } from "react";

const TextInput = ({children=''}) => {
  
  const [value, setValue] = useState(children);
  
  return ( 
    <div className="wrapper">
      <input 
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </div>
   );
}

TextInput.propTypes = {
  children: PropTypes.node.isRequired  };
 
export default TextInput;