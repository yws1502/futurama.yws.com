import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useFuturamaData } from "../../hooks/useFuturamaData"
import { Error, Loading } from "../../components";
import styled from "@emotion/styled";

const CharacterPage: NextPage = () => {
  const router = useRouter();
  const path = "characters/" + router.query.id;

  const { data, error } = useFuturamaData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  const { name, gender, species, homePlanet, occupation, images, sayings } = data;

  return (
    <Container>
      <h2>Character info</h2>
      <section>
        <article>
          <img src={images.main} alt="" />
          <dl>
            <dt className="data-title">name</dt>
            <dd>{`${name.first} ${name.middle} ${name.last}`}</dd>
            <dt className="data-title">gender</dt>
            <dd>{gender}</dd>
            <dt className="data-title">species</dt>
            <dd>{species}</dd>
            <dt className="data-title">homePlanet</dt>
            <dd>{homePlanet}</dd>
            <dt className="data-title">occupation</dt>
            <dd>{occupation}</dd>
          </dl>
        </article>
        <article className="sayWrap">
          <h3 className="data-title">Saying</h3>
          <ul>
            {sayings.map((say: string, idx: number) => {
              return (
                <li key={idx}>{say}</li>
                )
              })}
          </ul>
        </article>
      </section>
    </Container>
  )
}

export default CharacterPage;

const Container = styled.div`
  padding: 5rem;
  h2 {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    color: #C30A34;
    margin-bottom: 4rem;
  }

  section {
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 3rem;
    .data-title {
      display: inline-block;
      width: fit-content;
      font-weight: bold;
      color: #fff;
      border-radius: 20px;
      background-color: #006599;
      padding: .5rem 1rem;
      margin-bottom: 1rem;
    }

    dd { margin-bottom: 1rem; }

    img {
      width: 200px;
      object-fit: contain;
      margin: 2rem auto;
    }
    .sayWrap {
      background-color: #fff;
      box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);
      border-radius: 20px;
      font-size: 1.1rem;
      line-height: 25px;
      padding: 3rem;
    }
  }

  .text-hide {
    overflow: hidden;
    position: absolute;
    clip: rect(0,0,0,0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  }
`
