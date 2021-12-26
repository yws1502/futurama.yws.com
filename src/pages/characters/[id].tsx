import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCharacterData } from "../../hooks/useCharacterData"
import { Error, Loading } from "../../components";

const CharacterPage: NextPage = () => {
  const router = useRouter();
  const path = "characters/" + router.query.id;

  const { data, error } = useCharacterData(path);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <img src={data.images.main} alt="" />
      <h3>{`${data.name.first} ${data.name.middle} ${data.name.last}`}</h3>
      <p>{data.gender}</p>
      <p>{`${data.species} ${data.homePlanet} ${data.occupation}`}</p>
      <ul>
        {data.sayings.map((say: string, idx: number) => {
          return (
            <li key={idx}>{say}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default CharacterPage;
