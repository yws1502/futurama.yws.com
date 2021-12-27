import styled from "@emotion/styled";
import Link from "next/link"

export const Navigation = () => {
  const routerList = ["info", "characters", "cast", "episodes", "questions", "inventory"];
  return (
    <header>
      <h1>Futuerama</h1>
      <nav>
        <ul>
          {routerList.map((router: string, index: number) => {
            return (
            <Link
              key={`nav-${index}`}
              href={`/${router}`}
            >
              <a>
                <li>{router}</li>
              </a>
            </Link>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
