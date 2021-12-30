import styled from "@emotion/styled";
import Link from "next/link";
import { Cast } from "../../types"
import { ActorsImages } from "../../constants";

interface CastCardProps {
  castData : Cast;
}

export const CastCard = ({ castData } : CastCardProps) => {
  const { name, born, bio, id } = castData;
  return (
    <Card>
      <h3>{name}</h3>
      <img src={`${ActorsImages[id]}`} alt="" />
      <p>{born}</p>
      <Link href={bio.url}>
        <a>More</a>
      </Link>
    </Card>
  )
}

const Card = styled.article`
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
`