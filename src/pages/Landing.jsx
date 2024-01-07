import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1.5rem;
  background-color: red;
  color: white;
`;

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <StyledButton>Click Me</StyledButton>
    </div>
  );
};
export default Landing;
