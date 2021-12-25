import styled from "@emotion/styled"
import { Character } from "../types/Character"

interface CharacterProps {
  characterData : Character;
}

export const CharacterCard = ({ characterData } : CharacterProps) => {
  return (
    <Card>
      <img src={characterData.images.main}></img>
      <CharacterTitle>{`${characterData.name.first} ${characterData.name.middle} ${characterData.name.last}`}</CharacterTitle>
    </Card>
  )
}

const Card = styled.div`
  text-align: center;
  border: 2px solid #eee;
  border-radius: 10px;
`

const CharacterTitle = styled.h2`
  text-align: center;
`
