import styled from "@emotion/styled";
import Link from "next/link";
import { Character } from "../types/Character";
import { useData } from "../hooks/useData";
import { Error, Loading, CharacterCard } from "../components";
import { MEDIA_QUERY_END_POINT } from "../constants";

interface CharacterContainerProps {
  name : string;
}

export const CharacterContainer = ({name} : CharacterContainerProps) => {
  const { data, error } = useData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <SubContainer>
      {data.map((character: Character) => {
        return (
          <Link
            href={`${name}/${character.id}`}
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
    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);
    padding: 1.5rem;
  }
`
