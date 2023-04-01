import { ChangeEvent, useCallback, useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/Card";
import { CardContainer } from "../../components/Card/styles";
import Image from "../../components/Image";
import { InputContainer } from "../../components/Input/styles";
import { getInfos } from "../../services/api";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";

interface IMainInfo {
  id: string;
  name: string;
  image: string;
}
interface ICharacterInfos {
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

export default function Home() {
  const [infos, setInfos] = useState<IMainInfo[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<IMainInfo[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const mapItem = [];
  for (let i = 1; i < 43; i++) mapItem.push(i);

  const navigate = useNavigate();

  const getData = () =>
    getInfos(pageNumber).then((response) => setInfos(response.results));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  useEffect(() => {
    getData();
    setFiltered(
      infos.filter((info) =>
        info.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [infos]);

  const handleClick = (id: string) => {
    navigate(`/character/${id}`);
  };

  const handlePage = (numero: number) => {
    setPageNumber(numero);
    getInfos(numero).then((response) => setInfos(response.results));
  };

  return (
    <>
      <Image src={logo} />
      <InputContainer placeholder="Type to search..." onChange={handleChange} />
      <CardContainer>
        {filtered.map((info) => {
          return (
            <Card image={info.image} key={info.id} title={info.name}>
              <Button
                variant="primary"
                title="Read More"
                id={info.id}
                onClick={() => {
                  handleClick(info.id);
                }}
              />
            </Card>
          );
        })}
      </CardContainer>
      <Pagination>
        {mapItem.map((item, index) => {
          return (
            <button key={index} onClick={() => handlePage(item)}>
              {item}
            </button>
          );
        })}
      </Pagination>
    </>
  );
}
