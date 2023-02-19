export default async function fetchQuestions({ queryKey }) {
  const res = await fetch(
    "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
  );

  return res.json();
}
