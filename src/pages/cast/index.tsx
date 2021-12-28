import Link from "next/link";
import styled from "@emotion/styled";
import { NextPage } from "next";
import { useData } from "../../hooks/useData";
import { Error, Loading } from "../../components";
import { Cast } from "../../types";
import { MEDIA_QUERY_END_POINT, ActorsImages } from "../../constants";

const CastPage: NextPage = () => {
  const name = "cast";
  const { data, error } = useData(name)
  
  if (error) return <Error />;
  if (!data) return <Loading />;
  
  return (
    <Container>
      <Title>Cast</Title>
      <ContentContainer>
        {data.map((cast: Cast) => {
          const { name, born, bio, id } = cast;
          return (
            <Content key={`cast-${id}`}>
              <SubTitle>{name}</SubTitle>
              <img src={`${ActorsImages[id]}`} alt="" />
              <p>{born}</p>
              <Link href={bio.url}>
                <a>More</a>
              </Link>
            </Content>
          )
        })}
      </ContentContainer>
    </Container>
  )
}

export default CastPage;

const Container = styled.div`
  margin: 5rem;
`

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 3rem;
`

const ContentContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Content = styled.article`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);
  line-height: 22px;
  padding: 1.5rem;
  text-align: center;
  & > img {
    width: 200px;
    border-radius: 20px;
    margin: 0 auto;
    object-fit: contain;
  }
  & > p{
    margin : .5rem;
  }
  & > a{
    background-color: #006599;
    color: #fff;
    border-radius: 10px;
    padding: .2rem .6rem;
  }
`

const SubTitle = styled.h3`
  display: block;
  width: 100px;
  height: 30px;
  line-height: 27px;
  background-color: #C30A34;
  color: #fff;
  border-radius: 20px;
  margin: 1rem auto;
`
