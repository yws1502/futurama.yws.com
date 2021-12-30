import styled from "@emotion/styled"
import { Character } from "../types/Character"

interface CharacterProps {
  characterData : Character;
}

export const CharacterCard = ({ characterData } : CharacterProps) => {
  return (
    <Card>
      <h2>{`${characterData.name.first} ${characterData.name.middle} ${characterData.name.last}`}</h2>
      <img src={characterData.images.main}></img>
      <p>{`${characterData.species}`}</p>
    </Card>
  )
}

const Card = styled.div`
  text-align: center;
  h2 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  img {
    width: 230px;
    height: 312px;
    object-fit: contain;
    margin: 0 auto 2rem;
  }

  p {
    color: #000;
    font-size: 1.2rem;
  }
`
