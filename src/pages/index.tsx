import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Link from 'next/link';
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
      <Container>
        <main>
          <img src="https://flxt.tmsimg.com/assets/p14714473_b_v13_ab.jpg" alt="" />
          <div className='TextWrap'>
            <h2 className='SubTitle'>Welcome to the World Tomorrow</h2>
            <p className='Describe'>You Will Find Happiness With a new love</p>
            <Link href={"https://www.imdb.com/find?q=futurama&ref_=nv_sr_sm"}>
              <button className='btn-more'>More Futurama</button>
            </Link>
          </div>
        </main>
        <footer>
          <p>	&copy; copyright https://sampleapis.com/api-list/futurama</p>
          <em>futurama</em>
        </footer>
      </Container>
    </div>
  )
}

export default Home

const Container = styled.div`
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
    padding: 4.5rem 1.4rem;
    img { width: 400px; }
    .TextWrap {
      margin-top: 100px;
      max-width: 490px;
    }
    .SubTitle {
      display: block;
      font-size: 1.4em;
      font-weight: 600;
      color: #C30A34;
    }
    .Describe {
      font-size: 2.6em;
      font-weight: bold;
      color: #FFF;
      margin: 15px 0 14px;
    }
    .btn-more {
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
    }
  }
  footer {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    gap: 15px;
    background-color: #D3DEE4;
    height: 133px;
    em {
      color: #E34047;
      font-weight: 600;
    }
  }
  
  @media (max-width: 680px) {
    main {
      flex-direction: column;
      .TextWrap {
        margin: 0;
      }
    }
    footer {
      position: relative;
    }
  }
`
