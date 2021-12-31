import styled from "@emotion/styled";
import { NextPage } from "next";
import { PageTitle, EpisodeContainer } from "../../components";

const EpisodePage: NextPage = () => {
  const name = "episodes";

  return (
    <Container>
      <PageTitle title={"Episode"} />
      <EpisodeContainer name={name}/>
    </Container>
  )
}

export default EpisodePage;

const Container = styled.div`
  margin: 5rem;
`
