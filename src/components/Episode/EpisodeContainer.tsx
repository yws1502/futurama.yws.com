import { useFuturamaData } from "../../hooks/useFuturamaData";
import { MEDIA_QUERY_END_POINT } from "../../constants";
import { Episodes } from "../../types";
import { Error, Loading, EpisodeCard } from "..";
import styled from "@emotion/styled";

interface EpisodeContainerProps {
  name : string,
}

export const EpisodeContainer = ({ name } : EpisodeContainerProps) => {
  const { data, error } = useFuturamaData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <SubContainer>
      {data.map((episode: Episodes) => {
        return (
          <EpisodeCard 
            episodeData={episode} />
        )
      })}
    </SubContainer>
  )
}

const SubContainer = styled.section`
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