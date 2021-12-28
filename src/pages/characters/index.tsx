import type { NextPage } from "next";
import { CharacterContainer } from "../../components/CharacterContainer";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT} from "../../constants/index";

const CharactersPage: NextPage = () => {
  const name = "characters";

  return (
    <Container>
      <SubTitle>Characters</SubTitle>
      <CharacterContainer name={name}/>
    </Container>
  )
}

export default CharactersPage;

const Container = styled.div`
  background-color: #8DDAC6;
  padding: 5rem;
  
  @media (max-width:${MEDIA_QUERY_END_POINT.TABLET}) {
    padding: 3rem 8rem;
  }

  @media (max-width:${MEDIA_QUERY_END_POINT.MOBILE}) {
    padding: 1rem 2rem;
  }
`

const SubTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: #C30A34;
  margin-bottom: 4rem;
`