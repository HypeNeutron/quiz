import Loading from "./components/Loading";
import QuizLobby from "./components/QuizLobby/QuizLobby";
import TotalScoreModal from "./components/TotalScoreModal";
import { useGlobalContext } from "./context";
import Answers from "./pages/Answers";
import QuizStyled from "./wrappers/AppStyled";

function App() {
  const {
    isQuizLobby,
    loading,
    indexQuestion,
    questions,
    score,
    nextQuestion,
    checkAnswer,
    isPageAnswers,
  } = useGlobalContext();

  if (isPageAnswers) return <Answers />;
  if (isQuizLobby) return <QuizLobby />;
  if (loading) return <Loading />;

  const {
    question,
    correct_answer: correctAns,
    incorrect_answers: incorrectAns,
  } = questions[indexQuestion]; // questions change corresponding index

  const answers = [...incorrectAns];
  const randomIndex = Math.floor(Math.random() * 4);

  // Push incorrectAnswer 3 and randomIndex 0-3 (4 choice)
  // if randomIndex === 3 move correct to tail in arr
  // if randomIndex other 0,1,2 select random incorrect num push to tail
  // and replace by correct answer in arr

  if (randomIndex === 3) {
    answers.push(correctAns);
  } else {
    answers.push(answers[randomIndex]);
    answers[randomIndex] = correctAns;
  }

  // # use React [dangerouslySetInnerHTML] is when an API
  // # response returns HTML that make display incorrect

  return (
    <main>
      <TotalScoreModal />
      <QuizStyled>
        <p className="correctAns">
          correct answers: {score}/{questions.length}
        </p>
        <article>
          <h2
            // eslint-disable-next-line
            dangerouslySetInnerHTML={{ __html: question }}
            className="question"
          />
          {/* Choice */}
          <div>
            {answers
              .filter((a) => a !== undefined)
              .map((answer) => (
                <button
                  key={answer}
                  type="button"
                  aria-label="answer"
                  onClick={() => checkAnswer(correctAns === answer)}
                  className="answerBtn"
                  // eslint-disable-next-line
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              ))}
          </div>
        </article>

        <button type="button" className="nextQuest" onClick={nextQuestion}>
          next question
        </button>
      </QuizStyled>
    </main>
  );
}

export default App;
