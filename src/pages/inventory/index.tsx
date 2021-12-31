import styled from "@emotion/styled";
import { NextPage } from "next";
import { PageTitle, InventoryContainer } from "../../components";

const InventoryPage: NextPage = () => {
  const name = "inventory";

  return (
    <Container>
      <PageTitle title={"Inventory"} />
      <InventoryContainer name={name} />
    </Container>
  )
}

export default InventoryPage;

const Container = styled.div`
  margin: 5rem;
`
