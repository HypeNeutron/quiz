import { css } from 'styled-components';

export const quizSection = css`
  width: 90vw;
  margin: 4rem auto;
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 3rem;
`;

export const btn = css`
  border-radius: var(--radius);
  border-color: transparent;
  display: block;
  text-transform: capitalize;
  font-weight: 700;
  letter-spacing: var(--spacing);
  background: #ffb100;
  color: var(--clr-black);
  transition: var(--transition);
  cursor: pointer;
`;
