import styled from "@emotion/styled";
import { NextPage } from "next";
import { CastContainer, PageTitle } from "../../components";


const CastPage: NextPage = () => {
  const name = "cast";
  return (
    <Container>
      <PageTitle title={"Cast"} />
      <CastContainer name={name} />
    </Container>
  )
}

export default CastPage;

const Container = styled.div`
  margin: 5rem;
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 3rem;
  }
`
