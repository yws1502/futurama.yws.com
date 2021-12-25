import axios from "axios";
import useSWR from "swr";

import type { NextPage } from "next";
import { Character } from "../../types/Character";

const CharacterPage: NextPage = () => {
  const fetcher = (url: string) => axios.get(url).then(res => res.data);

  const {data, error} = useSWR("https://api.sampleapis.com/futurama/characters", fetcher);

  if (error) return <div>Failed Loading...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.map((character: Character) => {
        return (
          <div key={`futurama-character-${character.id}`}>
            <img src={character.images.main}></img>
            <h2>{`${character.name.first} ${character.name.middle} ${character.name.last}`}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default CharacterPage;
