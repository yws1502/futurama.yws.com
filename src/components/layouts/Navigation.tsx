import styled from "@emotion/styled";
import Link from "next/link"
import { MEDIA_QUERY_END_POINT } from "../../constants";
import { API_ENDPOINT } from "../../constants";

export const Navigation = () => {
  const routerList = ["info", "characters", "cast", "episodes", "questions", "inventory"];
  return (
    <Header>
      <Inner>
        <Logo className="test">
          <Link href={'/'}>
            <a>Futuerama</a>
          </Link>
        </Logo>
        <nav>
          <Menu>
            {routerList.map((router: string, index: number) => {
              return (
              <Link
                key={`nav-${index}`}
                href={`/${router}`}
              >
                <a>
                  <ListItem>{router}</ListItem>
                </a>
              </Link>
              )
            })}
          </Menu>
        </nav>
      </Inner>
    </Header>
  )
}

const Header = styled.header`
  box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);
  width: 100%;
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.7rem 0;
`

const Logo = styled.h1`
  font-size: 28px;
  font-weight: bold;
  line-height: 42px;
  `

const Menu = styled.ul`
  display: flex;
  list-style: none;
  font-size: 1.1rem;
  `

const ListItem = styled.li`
  transition: .2s;
  font-weight: bold;
  margin: .7rem;
  padding: 9px 10px;
  border-radius: 50px;
  &:hover {
    color: white;
    background-color: orange;
  }
`
