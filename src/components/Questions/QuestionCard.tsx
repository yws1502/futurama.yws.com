import styled from "@emotion/styled";
import { Question } from "../../types"

interface QuestionDataProps {
  questionData: Question,
}

export const QuestionCard = ({ questionData }: QuestionDataProps) => {
  const { question, possibleAnswers, correctAnswer, id } = questionData;

  return (
    <Card key={`question-${id}`}>
    <h3>{question}</h3>
    {possibleAnswers.map((choise: string, index: number) => {
      return (
        <div key={`question-${id}-${index}`}>
          <input type="radio" id={`${id}-${index}`} name={`Quiz-${id}`} />
          <label htmlFor={`${id}-${index}`}>{choise}</label>
        </div>
      )
    })}
    <p>정답 : {correctAnswer}</p>
    </Card>
  )
}

const Card = styled.article`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);
  line-height: 22px;
  padding: 1.5rem;
  div > input {
    margin-right: .7rem;
  }
  h3 {
    display: inline-block;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 27px;
    color: #C30A34;
    border-radius: 20px;
    margin: 1rem auto;
  }
  p {
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 1rem;
    margin-top: 1rem;
  }
`