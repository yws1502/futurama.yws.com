import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../../constants";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Inventory } from "../../types";
import { Error, Loading, InventoryCard } from "..";

interface InventoryContainerProps {
  name : string,
}

export const InventoryContainer = ({ name } : InventoryContainerProps) => {
  const { data, error } = useFuturamaData(name)
  
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <SubContainer>
      {data.map((inventoryData: Inventory) => {
        return (
          <InventoryCard 
            key={`inventory-${inventoryData.id}`}
            inventoryData={inventoryData}
          />
        )
      })}
  </SubContainer>
  )
}

const SubContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: repeat(2, 1fr);
  }
`