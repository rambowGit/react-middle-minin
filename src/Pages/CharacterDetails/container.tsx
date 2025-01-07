import { useMemo } from "react";
import { useParams } from "react-router-dom";
import data from "../../Data/characters.json";
import { Character } from "../../Types/character";
import CharacterDetails from "./component";

const CharacterDetailsContainer = () => {
  const { id } = useParams();

  const character: Character | undefined = useMemo(() => {
    return data.find((c) => c.id === Number(id));
  }, [id]);
  return (
    character && ( <CharacterDetails character={character} />)
  )
};

export default CharacterDetailsContainer;
