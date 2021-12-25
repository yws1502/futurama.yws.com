import styled from "@emotion/styled";

import { useRouter } from "next/router";
import { Character } from "../types/Character";
import { useCharacterData } from "../hooks/useCharacterData";
import { Error, Loading, CharacterCard } from "../components";

interface CharacterContainerProps {
  name : string;
}

export const CharacterContainer = ({name} : CharacterContainerProps) => {
  const {data, error } = useCharacterData(name);
  const router = useRouter();

  console.log(router.query);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      {data.map((character: Character) => {
        return (
          <CharacterCard
            key={`futurama-character-${character.id}`}
            characterData={character}
          />
        )
      })}
    </Container>
  )
}


const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px
`