import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCharacterData } from "../../hooks/useCharacterData"
import { Error, Loading } from "../../components";
import styled from "@emotion/styled";

const CharacterPage: NextPage = () => {
  const router = useRouter();
  const path = "characters/" + router.query.id;

  const { data, error } = useCharacterData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      <SubTitle>Character info</SubTitle>
      <Contents>
        <Describe><DataTitle>name</DataTitle>{`${data.name.first} ${data.name.middle} ${data.name.last}`}</Describe>
        <Describe><DataTitle>gender</DataTitle>{data.gender}</Describe>
        <Describe><DataTitle>species</DataTitle>{`${data.species}`}</Describe>
        <Describe><DataTitle>homePlanet</DataTitle>{`${data.homePlanet}`}</Describe>
        <Describe><DataTitle>occupation</DataTitle>{`${data.occupation}`}</Describe>
        <img src={data.images.main} alt="" />
        <SayWrap>
          <DataTitle>Saying</DataTitle>
          <ul>
            {data.sayings.map((say: string, idx: number) => {
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