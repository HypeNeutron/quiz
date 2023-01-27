import { useGlobalContext } from "../context";
import { TQuestionAPI } from "../context/context.types";
import AnswersSection from "./AnswersStyled";

function Answers() {
  const { questions, backToLobby } = useGlobalContext();

  return (
    <AnswersSection>
      <h3>answers</h3>
      {questions.map((question: TQuestionAPI) => {
        return (
          <div className="ans-container" key={question.question}>
            <h3
              className="question"
              // eslint-disable-next-line
              dangerouslySetInnerHTML={{ __html: question.question }}
            />
            <p>
              <strong>answer</strong>:
              <span
                className="answer"
                // eslint-disable-next-line
                dangerouslySetInnerHTML={{ __html: question.correct_answer }}
              />
            </p>
            <hr />
          </div>
        );
      })}
      <button type="button" className="closeAns" onClick={backToLobby}>
        play again
      </button>
    </AnswersSection>
  );
}

export default Answers;
