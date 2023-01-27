import styled from "styled-components";

import { useGlobalContext } from "../context";
import { btn } from "../wrappers/GlobalStyled";

function TotalScoreModal() {
  const { isModalOpen, questions, closeModal, score, lookAnswers } =
    useGlobalContext();
  return (
    <ModalScore isModalOpen={isModalOpen}>
      <div className="modal">
        <h2>congrats!</h2>
        <p>
          You answered {((score / questions.length) * 100).toFixed(0)}% of
          question correctly
        </p>

        <button type="button" className="contextBtn" onClick={closeModal}>
          play again
        </button>

        <button type="button" className="contextBtn" onClick={lookAnswers}>
          answer
        </button>
      </div>
    </ModalScore>
  );
}

export default TotalScoreModal;

const ModalScore = styled.div<{ isModalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  z-index: ${({ isModalOpen }) => (isModalOpen ? "99" : "-1")};
  opacity: ${({ isModalOpen }) => (isModalOpen ? "1" : "0")};

  .modal {
    background: var(--clr-white);
    width: 90vw;
    max-width: var(--fixed-width);
    padding: 3em;
    border-radius: var(--radius);
    text-align: center;
    position: relative;
    p {
      font-size: 1.5rem;
      text-transform: none;
    }
  }

  .contextBtn {
    ${btn}
    font-size: 1rem;
    padding: 0.25em 0.5em;
    width: 12em;
    margin-left: auto;
    margin-top: 2em;
    margin-right: auto;
  }
`;
