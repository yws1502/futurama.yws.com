import styled from "@emotion/styled";
import { Episodes } from "../../types"

interface EpisodeProps {
  episodeData : Episodes,
}

export const EpisodeCard = ({ episodeData } : EpisodeProps) => {
  const { number, title, writers, originalAirDate, desc } = episodeData;

  return (
  <Card>
    <h3>{title} - {number}</h3>
    <p>{writers}</p>
    <p>{originalAirDate}</p>
    <p className="describe">{desc}</p>
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
  p { margin : .5rem; }
  h3 {
    display: inline-block;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 27px;
    color: #C30A34;
    border-radius: 20px;
    margin: 1rem auto;
  }
  .describe {
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 1rem;
  }
`