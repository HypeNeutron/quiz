import { useGlobalContext } from "../../context";
import QuizLobbySection from "./QuizLobbyStyled";

export default function QuizLobby() {
  const { quizSetup, inputChange, quizSubmit, error } = useGlobalContext();
  const { amount, category, difficulty } = quizSetup;

  return (
    <main>
      <QuizLobbySection>
        <form className="quizSetup-form" onSubmit={quizSubmit}>
          <h2>setup quiz</h2>
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">
              number or questions
              <input
                name="amount"
                value={amount}
                onChange={inputChange}
                type="number"
                id="amount"
                className="formInput"
                min={1}
                max={50}
              />
            </label>
          </div>
          {/* category */}
          <div className="form-control">
            <label htmlFor="category">
              category
              <select
                name="category"
                value={category}
                onChange={inputChange}
                id="category"
                className="formInput"
              >
                <option value="GeneralKnowledge">General Knowledge</option>
                <option value="Computers">Computers</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Politics">Politics</option>
                <option value="Books">Books</option>
              </select>
            </label>
          </div>
          {/* difficulty */}
          <div className="form-control">
            <label htmlFor="difficulty">
              difficulty
              <select
                name="difficulty"
                value={difficulty}
                onChange={inputChange}
                id="difficulty"
                className="formInput"
              >
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
              </select>
            </label>
          </div>

          {error && (
            <p className="error">
              can&#39;t generate questions, please try different options
            </p>
          )}

          <button className="submitBtn">start</button>
        </form>
      </QuizLobbySection>
    </main>
  );
}
