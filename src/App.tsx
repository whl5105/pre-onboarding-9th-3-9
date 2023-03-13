import styled from 'styled-components';

function App() {
  return (
    <div>
      <StyledBox />
    </div>
  );
}

export default App;

const StyledBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: tomato;
`;
