import {useFuturamaData} from "../../hooks/useFuturamaData";
import { Error, Loading } from "../";
import Link from "next/link";
import styled from "@emotion/styled";

interface InfoProps {
  name : string,
}

export const InfoCotainer = ({ name }: InfoProps) => {
  const { data, error } = useFuturamaData(name)
  
  if (error) return <Error />;
  if (!data) return <Loading />;
  const { synopsis, yearsAired, creators } = data[0];

  return (
    <InfoContainer>
      <article>
        <strong>synopsis</strong>
        <p>{synopsis}</p>
      </article>
      <article>
        <strong>yearsAired</strong>
        <p>{yearsAired}</p>

        <strong>creators</strong>
        <ul className="creator-wrap">
          <li>
            <Link href={creators[0].url}>
            <a>
              <img src="https://m.media-amazon.com/images/M/MV5BMTUzODM3NTE3Ml5BMl5BanBnXkFtZTYwODY3Njc3._V1_UY317_CR12,0,214,317_AL_.jpg" alt="" />
              {creators[0].name}
            </a>
            </Link>
          </li>
          <li>
            <Link href={creators[1].url}>
              <a>
                <img src="https://m.media-amazon.com/images/M/MV5BMjE2MTI5NDY5OF5BMl5BanBnXkFtZTYwNjY3Njc3._V1_UY317_CR9,0,214,317_AL_.jpg" alt="" />
                {creators[1].name}
              </a>
            </Link>
          </li>
        </ul>
      </article>
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);
  line-height: 1.8rem;
  max-width: 950px;
  padding: 2rem;
  margin: 0 auto;

  article {
    text-align: center;
  }

  .creator-wrap {
    display: flex;
    justify-content: center;
    gap: 2rem;
    a { color: black; }
    img {
      width: 150px;
      border-radius: 10px;
    }
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
