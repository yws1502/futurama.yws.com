import styled from "@emotion/styled";
import { NextPage } from "next";
import { InfoCotainer, PageTitle } from "../../components";


const InfoPage: NextPage = () => {
  const name = "info";
  
  return (
    <Container>
      <PageTitle title={"Info"}/>
      <InfoCotainer name={name} />
    </Container>
  )
}

export default InfoPage;

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
