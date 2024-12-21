import { useState } from 'react';
import data from '../../Data/episodes.json';
import { Episode } from '../../Types/episode';
import Episodes from "./component";

const EpisodesContainer: React.FC = () => {
  const [episodes] = useState<Array<Episode>>(data);
    
  return ( 
    <>
      {episodes ? <Episodes episodes={episodes}/> : 'Эпизоды не найдены' }
    </>
    
   );
}
 
export default EpisodesContainer;