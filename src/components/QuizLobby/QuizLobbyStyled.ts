import styled from "styled-components";

import { btn, quizSection } from "../../wrappers/GlobalStyled";

const QuizLobbySection = styled.section`
  ${quizSection}
  max-width: 500px;

  .quizSetup-form {
    h2 {
      margin-bottom: 2rem;
    }
  }

  .form-control {
    margin-bottom: 2rem;
    label {
      display: block;
      text-transform: capitalize;
      font-weight: 500;
      color: var(--clr-grey-3);
      margin-bottom: 0.5rem;
    }
    .formInput {
      border: none;
      background: var(--clr-grey-10);
      font-size: 1rem;
      padding: 0.25rem 0.5rem;
      width: 100%;
      border-radius: var(--radius);
    }
  }

  .error {
    color: var(--clr-red-dark);
    text-transform: capitalize;
  }

  .submitBtn {
    ${btn}
    font-size: 1rem;
    margin-left: auto;
    padding: 0.25rem 0.5rem;
    width: 100%;
    margin-top: 3rem;
  }
`;
export default QuizLobbySection;
