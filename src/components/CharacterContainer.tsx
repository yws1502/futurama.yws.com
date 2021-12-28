import styled from "@emotion/styled";
import Link from "next/link";
import { Character } from "../types/Character";
import { useCharacterData } from "../hooks/useCharacterData";
import { Error, Loading, CharacterCard } from "../components";
import { MEDIA_QUERY_END_POINT } from "../constants";
import { ENDPOINT } from "../constants";

interface CharacterContainerProps {
  name : string;
}

export const CharacterContainer = ({name} : CharacterContainerProps) => {
  const { data, error } = useCharacterData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;
  const PATH = ENDPOINT + name + "/";

  return (
    <SubContainer>
      {data.map((character: Character) => {
        return (
          <Link
            href={`${PATH}${character.id}`}
            key={`futurama-character-${character.id}`}
          >
            <a>
              <CharacterCard characterData={character}/>
            </a>
          </Link>
        )
      })}
    </SubContainer>
  )
}

const SubContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }
  & > a {
    background-color: #fff;
    border-radius: 15px;
    padding: 1.5rem;
  }
`
