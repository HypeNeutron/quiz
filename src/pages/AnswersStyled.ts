import styled from "styled-components";

import { btn } from "../wrappers/GlobalStyled";

const AnswersSection = styled.section`
  width: 90vw;
  height: auto;
  max-width: var(--max-width);
  margin: 4em auto;
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 1em 2em;

  @media screen and (min-width: 350px) {
    padding: 3em;
  }

  > h3 {
    color: rgb(57, 163, 62);
  }

  .ans-container {
    padding: 0.5em 0;
    margin-bottom: 0.5em;
    h3.question {
      font-size: 1.5rem;
    }
    span.answer {
      color: var(--clr-green-dark);
      padding-left: 4px;
    }
    hr {
      color: var(--clr-grey-10);
    }
  }

  .closeAns {
    ${btn}
    font-size: 1rem;
    width: 70%;
    padding: 0.6em 0.5em;
    margin: 1.2em auto;
    @media screen and (min-width: 552px) {
      width: 30%;
    }
    @media screen and (min-width: 1000px) {
      width: 15%;
    }
  }
`;
export default AnswersSection;
