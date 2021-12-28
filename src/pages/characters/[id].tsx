import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useData } from "../../hooks/useData"
import { Error, Loading } from "../../components";
import styled from "@emotion/styled";

const CharacterPage: NextPage = () => {
  const router = useRouter();
  const path = "characters/" + router.query.id;

  const { data, error } = useData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  const { name, gender, species, homePlanet, occupation, images, sayings } = data;

  return (
    <Container>
      <SubTitle>Character info</SubTitle>
      <Contents>
        <Describe><DataTitle>name</DataTitle>{`${name.first} ${name.middle} ${name.last}`}</Describe>
        <Describe><DataTitle>gender</DataTitle>{gender}</Describe>
        <Describe><DataTitle>species</DataTitle>{`${species}`}</Describe>
        <Describe><DataTitle>homePlanet</DataTitle>{`${homePlanet}`}</Describe>
        <Describe><DataTitle>occupation</DataTitle>{`${occupation}`}</Describe>
        <img src={images.main} alt="" />
        <SayWrap>
          <DataTitle>Saying</DataTitle>
          <ul>
            {sayings.map((say: string, idx: number) => {
              return (
                <li key={idx}>{say}</li>
                )
              })}
          </ul>
        </SayWrap>
      </Contents>
    </Container>
  )
}

export default CharacterPage;

const Container = styled.div`
  padding: 5rem;
`

const SubTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: #C30A34;
  margin-bottom: 4rem;
`

const Contents = styled.section`
  text-align: center;
  & > img {
    width: 200px;
    object-fit: contain;
    margin: 2rem auto;
  }
`

const SayWrap = styled.ul`
  background-color: #fff;
  box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);
  border-radius: 20px;
  font-size: 1.1rem;
  line-height: 25px;
  padding: 3rem 0;
`

const DataTitle = styled.span`
  font-weight: bold;
  color: #fff;
  border-radius: 20px;
  background-color: #006599;
  margin: 3rem 1rem;
  padding: .5rem 1rem;
`

const Describe = styled.p`
  margin: 2rem;
`