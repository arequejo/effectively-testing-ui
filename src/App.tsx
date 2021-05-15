import styled from 'styled-components';
import Contacts from './components/Contacts/Contacts';

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

function App() {
  return (
    <Container>
      <Contacts />
    </Container>
  );
}

export default App;
