import Link from "next/link";
import styled from "@emotion/styled";
import { NextPage } from "next";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Error, Loading } from "../../components";
import { Creator } from "../../types";

const InfoPage: NextPage = () => {
  const name = "info";
  const { data, error } = useFuturamaData(name)
  
  if (error) return <Error />;
  if (!data) return <Loading />;
  const { synopsis, yearsAired, creators } = data[0];
  
  return (
    <Container>
      <h2>Info</h2>
      <section>
        <article>
          <strong>synopsis</strong>
          <p>{synopsis}</p>
        </article>
        <article>
        <strong>yearsAired</strong>
        <p>{yearsAired}</p>
        </article>
        <article>
          <strong>creators</strong>
          {creators.map((creator: Creator, index: number) => {
            const { name, url } = creator;
            return (
              <Link 
                key={`creator-${index}`}
                href={url}
              >
                <a>
                  <em> {name} </em>
                </a>
              </Link>
            )
          })}
        </article>
      </section>
    </Container>
  )
}

export default InfoPage;

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
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);
    line-height: 22px;
    padding: 2rem;
  }

  article {
    text-align: center;
    a { color: black; }
    a + a::before { content: "/"; }
  }

  strong {
    display: block;
    width: 100px;
    height: 30px;
    line-height: 25px;
    background-color: #C30A34;
    color: #fff;
    border-radius: 20px;
    margin: 1rem auto;
  }
`
