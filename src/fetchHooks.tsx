import axios from "axios";
import { useQuery } from "react-query";

export function useAdvice() {
  const BASE_URL = "https://api.adviceslip.com/advice";

  const queryFn = () => {
    return axios.get(`${BASE_URL}`);
  };

  return useQuery(["advice"], queryFn, {
    select: (res) => res.data.slip,
  });
}
