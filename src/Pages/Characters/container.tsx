import { Fragment, useState } from 'react';
import data from '../../Data/characters.json';
import { Character } from '../../Types/character';
import Characters from "./component";

const CharactersContainer = () => {
  const [characters] = useState<Array<Character>>(data);
    
  return ( 
    <Fragment>
      {characters ? <Characters characters={characters}/> : 'Персонажы не найдены' }
    </Fragment>
    
   );
}
 
export default CharactersContainer;