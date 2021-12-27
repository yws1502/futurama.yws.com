import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../styles/globals.css" />
      </Head>
      <MainContainer>
        <Image src="https://flxt.tmsimg.com/assets/p14714473_b_v13_ab.jpg" alt="" />
        <TextWrap>
          <SubTitle>Welcome to the World Tomorrow</SubTitle>
          <Describe>You Will Find Happiness With a new love</Describe>
          <Button>More Futurama</Button>
        </TextWrap>
      </MainContainer>
      <Footer>
        <p>	&copy; copyright https://sampleapis.com/api-list/futurama</p>
        <em>futurama</em>
      </Footer>
    </div>
  )
}

export default Home



const MainContainer = styled.main`
  background-color: #8DDAC6;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  padding: 60px 0 120px;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`

const Image = styled.img`
  width: 400px;
`

const TextWrap = styled.div`
  margin-top: 100px;
  max-width: 490px;
  @media (max-width: 680px) {
    margin: 0;
  }
`

const SubTitle = styled.strong`
  display: block;
  font-size: 1.4em;
  font-weight: 600;
  color: #C30A34;
`

const Describe = styled.p`
  font-size: 2.6em;
  font-weight: bold;
  color: #FFF;
  margin: 15px 0 14px;
`

const Button = styled.button`
  font-size: 1em;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 20px;
  background-color: #E34047;
  padding: 10px 25px;
  box-shadow: rgba(50, 50, 93, 0.5) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  &:hover {
    box-shadow: none;
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 15px;
  background-color: #D3DEE4;
  height: 133px;
  & > em {
    color: #E34047;
    font-weight: 600;
  }
`
