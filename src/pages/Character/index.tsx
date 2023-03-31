import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { useEffect } from "react";

import {
  TitleAndImageContainer,
  CharacterDetailsCard,
  TextContainer,
  ButtonContainer,
} from "./styles";
import { getCharacterInfos } from "../../services/api";
import { useState } from "react";

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

export default function Character() {
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;

  const [characterInfos, setCharacterInfos] = useState<ICharacterInfos>();

  useEffect(() => {
    getCharacterInfos(id as string).then((response) =>
      setCharacterInfos(response)
    );
  }, []);

  return (
  <CharacterDetailsCard>
    <TitleAndImageContainer>
      <img src={characterInfos?.image} alt="" />
      <h1>{characterInfos?.name}</h1>
    </TitleAndImageContainer>
    <TextContainer>
      <p>
        <strong>Gender:</strong> {characterInfos?.gender}
      </p>
      <p>
        <strong>Species:</strong> {characterInfos?.species}
      </p>
      <p>
        <strong>Status:</strong> {characterInfos?.status}
      </p>
      <p>
        <strong>Origin:</strong> {characterInfos?.origin.name}
      </p>
      <p>
        <strong>Location:</strong> {characterInfos?.location.name}
      </p>
    </TextContainer>
    <ButtonContainer>
      <Button
        title="Go Back"
        variant="secondary"
        type="button"
        id={characterInfos?.name}
        onClick={() => navigate("/")}
      />
    </ButtonContainer>
  </CharacterDetailsCard>
  );
}
