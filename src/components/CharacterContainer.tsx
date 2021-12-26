import styled from "@emotion/styled";
import { Character } from "../types/Character";
import { useCharacterData } from "../hooks/useCharacterData";
import { Error, Loading, CharacterCard } from "../components";
import { MEDIA_QUERY_END_POINT } from "../constants";

interface CharacterContainerProps {
  name : string;
}

export const CharacterContainer = ({name} : CharacterContainerProps) => {
  const {data, error } = useCharacterData(name);

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
  gap: 20px;
  /* aspect-ratio: 16 / 9; */

  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
