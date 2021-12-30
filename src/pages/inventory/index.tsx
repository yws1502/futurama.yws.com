import styled from "@emotion/styled";
import { NextPage } from "next";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { Error, Loading } from "../../components";
import { Inventory } from "../../types";
import { MEDIA_QUERY_END_POINT } from "../../constants";

const InventoryPage: NextPage = () => {
  const name = "inventory";
  const { data, error } = useFuturamaData(name)
  
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <Container>
      <h2>Inventory</h2>
      <section>
        {data.map((inventoryData: Inventory) => {
          const { title, category, slogan, price, stock, description, id } = inventoryData;
          return (
            <article key={`inventory-${id}`}>
              <h3>{title}</h3>
              <p>{category}</p>
              <p>{slogan}</p>
              <p>{price}$ - {stock}EA</p>
              <p className="describe">{description}</p>
            </article>
          )
        })}
      </section>
    </Container>
  )
}

export default InventoryPage;

const Container = styled.div`
  margin: 5rem;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 3rem;
  }

  section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }

  article {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);
    line-height: 22px;
    padding: 1.5rem;
    text-align: center;
    & > p{
      margin : .5rem;
    }
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
  
  .describe {
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 1rem;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    section {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
