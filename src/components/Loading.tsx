import styled from "styled-components";

function Loading() {
  return (
    <main>
      <LoadingIndicator />
    </main>
  );
}

export default Loading;

const LoadingIndicator = styled.div`
  width: 6em;
  height: 6em;
  margin: 0 auto;
  margin-top: 10em;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: var(--clr-primary-5);
  animation: spinner 0.6s linear infinite;
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
