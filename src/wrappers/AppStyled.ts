import styled from "styled-components";
import { quizSection, btn } from "./GlobalStyled";

const QuizStyled = styled.section`
  ${quizSection}
  max-width: 1170px;
  .correctAns {
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: right;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-green-dark);
  }

  h2.question {
    font-size: 1.2rem;
    margin-bottom: 2em;
    text-align: center;
    line-height: 1.5;
    text-transform: none;
    @media screen and (min-width: 576px) {
      font-size: 2rem;
    }
  }

  .answerBtn {
    display: block;
    width: 100%;
    margin: 0.75rem auto;
    background: var(--clr-primary-7);
    border-radius: var(--radius);
    border-color: transparent;
    color: var(--clr-black);
    letter-spacing: var(--spacing);
    font-size: 0.7rem;
    cursor: pointer;
    padding: 0.5rem 0;
    transition: var(--transition);
    :hover {
      background: var(--clr-primary-5);
      color: var(--clr-white);
    }
    @media screen and (min-width: 576px) {
      max-width: 60%;
      font-size: 1rem;
    }
  }

  .nextQuest {
    ${btn}
    width: 40%;
    margin-left: auto;
    margin-top: 2em;
    padding: 0.25em 0.5em;
    :hover {
      background: #805900;
      color: #ffb100;
    }
    @media screen and (min-width: 576px) {
      font-size: 1rem;
      width: 12em;
    }
  }
`;
export default QuizStyled;
