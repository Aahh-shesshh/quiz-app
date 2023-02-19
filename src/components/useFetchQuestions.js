import { useQuery } from "@tanstack/react-query";
import fetchQuestions from "./fetchQuetions";

export default function useFetchQuestions() {
  const result = useQuery(["questions"], fetchQuestions);
  return result?.data || [];
}
