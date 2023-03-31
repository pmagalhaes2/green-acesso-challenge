import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api/character";

export const getInfos = (pageNumber: number) =>
  axios
    .get(`${baseURL}/?page=${pageNumber}`)
    .then((response) => response.data)
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });

export const getCharacterInfos = (id: string) =>
  axios
    .get(`${baseURL}/${id}`)
    .then((response) => response.data)
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
