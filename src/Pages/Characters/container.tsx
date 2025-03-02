import { useState } from 'react';
import data from '../../Data/characters.json';
import { Character } from '../../Types/character';
import Characters from "./component";

const CharactersContainer: React.FC = () => {
  const [characters] = useState<Array<Character>>(data);
    
  return ( 
    <>
      {characters ? <Characters characters={characters}/> : 'Персонажы не найдены' }
    </>
    
   );
}
 
export default CharactersContainer;