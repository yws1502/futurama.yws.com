import styled from "@emotion/styled";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Error, Loading, CastCard } from "../../components";
import { Cast } from "../../types";
import { MEDIA_QUERY_END_POINT } from "../../constants";

interface CastProps {
  name : string,
}

export const CastContainer = ({ name } : CastProps) => {
  const { data, error } = useFuturamaData(name)
  
  if (error) return <Error />;
  if (!data) return <Loading />;
  
  return (
    <SubContainer>
      {data.map((cast: Cast) => {
        return (
          <CastCard 
            key={`cast-${cast.id}`}
            castData={cast}
          />
        )
      })}
    </SubContainer>
  )
}

const SubContainer = styled.div`
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
