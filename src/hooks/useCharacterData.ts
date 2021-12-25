import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { API_ENDPOINT } from "../constants";

export const useCharacterData = (path: string) => {
  return useSWR(`${API_ENDPOINT}${path}`, fetcher);
}
