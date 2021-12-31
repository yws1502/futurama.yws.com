import styled from "@emotion/styled";
import { NextPage } from "next";
import { PageTitle, QuestionsContainer } from "../../components";

const QuestionPage: NextPage = () => {
  const name = "questions";

  return (
    <Container>
      <PageTitle title={"Quiz"}/>
      <QuestionsContainer name={name}/>
    </Container>
  )
}

export default QuestionPage;

const Container = styled.div`
  margin: 5rem;
`
