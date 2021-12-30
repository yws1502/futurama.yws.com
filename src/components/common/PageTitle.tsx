import styled from "@emotion/styled"

interface TitleProps {
  title : string,
}

export const PageTitle = ({ title } : TitleProps) => {
  return (
    <Title>{title}</Title>
  )
}

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 3rem;
`
