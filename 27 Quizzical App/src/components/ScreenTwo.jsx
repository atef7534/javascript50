import { useState } from "react";
import questions, { getQuestions } from "../../data";

export default function ScreenTwo() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState(questions);
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null),
  );
  const score = selectedAnswers
    .map((answer, index) => answer === quizQuestions[index].correctAnswer)
    .filter(Boolean).length;

  function selectAnswer(questionIndex, answer) {
    setSelectedAnswers((prevAnswers) =>
      prevAnswers.map((selectedAnswer, index) =>
        index === questionIndex ? answer : selectedAnswer,
      ),
    );
  }

  async function playAgainHandle() {
    setIsLoadingQuiz(true);

    try {
      const newQuestions = await getQuestions();
      setQuizQuestions(newQuestions);
      setSelectedAnswers(Array(newQuestions.length).fill(null));
      setIsSubmitted(false);
    } finally {
      setIsLoadingQuiz(false);
    }
  }

  return (
    <div className="container bg-light">
      {quizQuestions.map((question, questionIndex) => (
        <div className="question" key={questionIndex}>
          <h2 className="quest">{question.question}</h2>

          <ul className="choices">
            {question.choices.map((choice) => {
              const isSelected = selectedAnswers[questionIndex] === choice;
              const isCorrect = question.correctAnswer === choice;

              let theClass = "choice";

              if (isSubmitted) {
                const isUnanswered = selectedAnswers[questionIndex] === null;

                if (isCorrect) {
                  theClass = "choice correct";
                } else if (isSelected || isUnanswered) {
                  theClass = "choice wrong";
                } else {
                  theClass = "choice disabled";
                }
              } else if (isSelected) {
                theClass = "choice checked";
              }
              return (
                <li
                  key={choice}
                  className={theClass}
                  onClick={() => {
                    !isSubmitted ? selectAnswer(questionIndex, choice) : null;
                  }}
                >
                  {choice}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      {!isSubmitted && (
        <button className="check-answers" onClick={() => setIsSubmitted(true)}>
          Check answers
        </button>
      )}
      {isSubmitted && (
        <div className="results">
          <p>You scored {score}/5 correct answers</p>
          <button
            className="play-again"
            onClick={playAgainHandle}
            disabled={isLoadingQuiz}
          >
            {isLoadingQuiz ? "Loading new quiz..." : "Play again"}
          </button>
        </div>
      )}
    </div>
  );
}
