import styled from "@emotion/styled";
import Link from "next/link"
import { MEDIA_QUERY_END_POINT } from "../../constants";

export const Navigation = () => {
  const routerList = ["info", "characters", "cast", "episodes", "questions", "inventory"];
  return (
    <Header>
      <Inner>
        <Logo>Futuerama</Logo>
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
  `

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auth;
`

const Logo = styled.h1`
  margin: 6px 0;
  line-height: -10px;
`

const Menu = styled.ul`
  display: flex;
  list-style: none;
  font-size: 1.2rem;
  margin: 0;
`

const ListItem = styled.li`
  transition: .3s;
  margin: 1rem;
  
  &:hover {
    color: pink;
  }
`
