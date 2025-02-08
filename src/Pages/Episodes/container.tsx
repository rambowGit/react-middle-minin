import { Fragment, useState } from 'react';
import data from '../../Data/episodes.json';
import { Episode } from '../../Types/episode';
import Episodes from "./component";

const EpisodesContainer = () => {
  const [episodes] = useState<Array<Episode>>(data);
    
  return ( 
    <Fragment>
      {episodes ? <Episodes episodes={episodes}/> : 'Эпизоды не найдены' }
    </Fragment>
    
   );
}
 
export default EpisodesContainer;