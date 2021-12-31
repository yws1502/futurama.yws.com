import styled from "@emotion/styled"
import { Error, Loading, QuestionCard } from ".."
import { Question } from "../../types"
import { useFuturamaData } from "../../hooks/useFuturamaData"
import { MEDIA_QUERY_END_POINT } from "../../constants"

interface QuestionsProps {
  name: string,
}

export const QuestionsContainer = ({ name } : QuestionsProps) => {
  const { data, error } = useFuturamaData(name)
  
  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <SubContainer>
      {data.map((questionData: Question) => {
        return (
          <QuestionCard 
          key={`question-${questionData.id}`}
            questionData={questionData}
          />
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