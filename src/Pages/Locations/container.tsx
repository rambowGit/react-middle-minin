import { useState } from 'react';
import data from '../../Data/locations.json';
import { Location } from '../../Types/location';
import Locations from './component';

const LocationsContainer: React.FC = () => {
  const [locations] = useState<Array<Location>>(data);
  
  
  return ( 
    <>
      {locations ? <Locations locations={locations}/> : 'Локации не найдены' }
    </>
    
   );
}
 
export default LocationsContainer;