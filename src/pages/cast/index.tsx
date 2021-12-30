import Link from "next/link";
import styled from "@emotion/styled";
import { NextPage } from "next";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Error, Loading } from "../../components";
import { Cast } from "../../types";
import { MEDIA_QUERY_END_POINT, ActorsImages } from "../../constants";

const CastPage: NextPage = () => {
  const name = "cast";
  const { data, error } = useFuturamaData(name)
  
  if (error) return <Error />;
  if (!data) return <Loading />;
  
  return (
    <Container>
      <h2>Cast</h2>
      <section>
        {data.map((cast: Cast) => {
          const { name, born, bio, id } = cast;
          return (
            <article key={`cast-${id}`}>
              <h3>{name}</h3>
              <img src={`${ActorsImages[id]}`} alt="" />
              <p>{born}</p>
              <Link href={bio.url}>
                <a>More</a>
              </Link>
            </article>
          )
        })}
      </section>
    </Container>
  )
}

export default CastPage;

const Container = styled.div`
  margin: 5rem;
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 3rem;
  }
  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  article {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);
    line-height: 22px;
    padding: 1.5rem;
    text-align: center;
    h3 {
      display: block;
      width: 100px;
      height: 30px;
      line-height: 27px;
      background-color: #C30A34;
      color: #fff;
      border-radius: 20px;
      margin: 1rem auto;
    }
    img {
      width: 200px;
      border-radius: 20px;
      margin: 0 auto;
      object-fit: contain;
    }
    p{ margin : .5rem; }
    a{
      background-color: #006599;
      color: #fff;
      border-radius: 10px;
      padding: .2rem .6rem;
    }
  }
  
  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    section {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`
