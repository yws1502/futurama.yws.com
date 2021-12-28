import styled from "@emotion/styled";
import { NextPage } from "next";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Error, Loading } from "../../components";
import { Question } from "../../types";
import { MEDIA_QUERY_END_POINT } from "../../constants";

const QuestionPage: NextPage = () => {
  const name = "questions";
  const { data, error } = useFuturamaData(name)
  
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <Container>
      <Title>Quiz</Title>
      <ContentContainer>
        {data.map((questionData: Question) => {
          const { question, possibleAnswers, correctAnswer, id } = questionData;

          return (
            <Content key={`question-${id}`}>
              <SubTitle>{question}</SubTitle>
              {possibleAnswers.map((choise: string, index: number) => {
                return (
                  <div>
                    <input type="radio" id={`${id}-${index}`} name={`Quiz-${id}`} />
                    <label htmlFor={`${id}-${index}`}>{choise}</label>
                  </div>
                )
              })}
              <Describe>정답 : {correctAnswer}</Describe>
            </Content>
          )
        })}
      </ContentContainer>
    </Container>
  )
}

export default QuestionPage;

const Container = styled.div`
  margin: 5rem;
`

const Title = styled.h2`
  text-align: center;
  color: #C30A34;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 3rem;
`

const ContentContainer = styled.section`
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

const Content = styled.article`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);
  line-height: 22px;
  padding: 1.5rem;
  & > div > input {
    margin-right: .7rem;
  }
`

const SubTitle = styled.h3`
  display: inline-block;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 27px;
  color: #C30A34;
  border-radius: 20px;
  margin: 1rem auto;
`

const Describe = styled.p`
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 1rem;
  margin-top: 1rem;
  display: none;
`