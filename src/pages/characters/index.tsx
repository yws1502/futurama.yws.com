import type { NextPage } from "next";
import { CharacterContainer } from "../../components/CharacterContainer";

const CharactersPage: NextPage = () => {
  const name = "characters";

  return (
    <main>
      <CharacterContainer name={name}/>
    </main>
  )
}

export default CharactersPage;
