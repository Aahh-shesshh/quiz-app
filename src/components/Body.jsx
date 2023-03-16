import React from "react";
import Button from "./Button ";
import useFetchQuestions from "./useFetchQuestions";
import Checked from "./AfterChecked";

import Waiting from "./Waiting";

export default function Body() {
  const [questions, setQuestions] = React.useState([]);
  const [buttonIndex, setButtonIndex] = React.useState(0);
  const [correctAns, setCorrectAns] = React.useState([]);
  const [selectedOption, setSelectedOption] = React.useState({});
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const [score, setScore] = React.useState(0);
  const [options, setOptions] = React.useState([]);

  const res = useFetchQuestions();

  const handleClick = (questionIndex, option) => {
    setSelectedOption({ ...selectedOption, [questionIndex]: option });
  };

  const setOptionIndex = (questionIndex, optionIndex) => {
    setSelectedOptionIndex({
      ...selectedOptionIndex,
      [questionIndex]: optionIndex,
    });
  };

  const checkedAnswers = () => {
    setButtonIndex(buttonIndex + 1);
  };

  const checkScore = () => {
    let correctAnswers = 0;
    Object.keys(selectedOption).forEach((questionIndex) => {
      if (
        selectedOption[questionIndex] ===
        questions[questionIndex].correct_answer
      ) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  React.useEffect(() => {
    if (res.results) {
      setQuestions(res.results);
    }
  }, [res.results]);

  React.useEffect(() => {
    if (questions) {
      let options = questions.map((question) => {
        return [...question.incorrect_answers, question.correct_answer];
      });
      options = options.map((option) => {
        return option.sort(() => Math.random() - 0.5);
      });
      setOptions(options);
    }
  }, [questions]);

  React.useEffect(() => {
    if (questions) {
      let correctAnswers = questions.map((question) => {
        return question.correct_answer;
      });
      setCorrectAns(correctAnswers);
    }
  }, [questions]);

  return (
    <div className="body-div">
      {questions.length === 0 ? (
        <Waiting />
      ) : (
        questions.map((question, questionIndex) => {
          return (
            <div className="question-div" key={questionIndex}>
              <div className="question">
                <h3>{question.question}</h3>
              </div>
              <div className="option-div">
                {options[questionIndex] &&
                  options[questionIndex].map((option, optionIndex) => {
                    return (
                      <div
                        className="options"
                        key={optionIndex}
                        style={{
                          backgroundColor:
                            selectedOptionIndex[questionIndex] === optionIndex
                              ? selectedOption[questionIndex] === option
                                ? isSubmitted === true
                                  ? selectedOption[questionIndex] ===
                                    correctAns[questionIndex]
                                    ? "lightGreen"
                                    : "red"
                                  : "lightGreen"
                                : "white"
                              : correctAns[questionIndex] === option &&
                                isSubmitted === true
                              ? "lightGreen"
                              : "white",
                        }}
                        onClick={() => {
                          setOptionIndex(questionIndex, optionIndex);
                          handleClick(questionIndex, option);
                        }}
                      >
                        {option}
                      </div>
                    );
                  })}
              </div>
              <hr className="line"></hr>
            </div>
          );
        })
      )}
      {buttonIndex === 0 && null}
      {buttonIndex === 1 && <Checked score={score} />}

      <Button
        className="button-for-start"
        buttonName={buttonIndex ? "Play Again" : "Check Answers"}
        handleClick={() => {
          setIsSubmitted(!isSubmitted);
          // chaningCorrectColor();
          checkedAnswers();
          checkScore();
        }}
        link={buttonIndex === 2 ? "/Body" : null}
      />
    </div>
  );
}

// DESCRIPTION OF THE MAPPING AND ALSO SHUFFLING THE OPTIONS >>>>>>>>>

// React.useEffect: This is a hook provided by React that lets you
// synchronize a component with an external system. In this case,
// the hook is used to run a certain effect (i.e. some logic) whenever the component that uses it is rendered.

// if (questions) {: The code inside the if statement is executed only if the
//  questions variable is truthy (i.e. not null, undefined, 0, false, "", or NaN).

// let options = questions.map((question) => {: This line declares a new variable options
// and sets it equal to the result of calling the map method on the questions array. map is
// a higher-order function that creates a new array by calling a provided function on each element
//  in the original array.

// return [...question.incorrect_answers, question.correct_answer];: This is the function that
// is called on each element in the questions array. It takes a single question object and returns
// a new array that consists of the elements in question.incorrect_answers (an array of incorrect answers)
// and question.correct_answer (a single correct answer) concatenated.

// options = options.map((option) => {: This line sets the options variable to
//  the result of calling the map method on itself. The purpose of this line is to
//  shuffle the elements in each option array.

// return option.sort(() => Math.random() - 0.5);: This is the function that is called
// on each option array. It uses the sort method to sort the elements in the array in a
// random order. The sort method takes a compare function as an argument, and the provided
// compare function () => Math.random() - 0.5 always returns a random value between -1 and 1,
// effectively shuffling the elements in the array.
//
// setOptions(options);: This line calls the setOptions function, which is likely a hook that
//  updates the component's state and triggers a re-render. The argument passed to setOptions is
// the options array that was created and shuffled in the previous steps.

// So, in summary, this piece of code shuffles the options for a set of questions.
