import { Container } from 'react-bootstrap';
import Navigation from './components/features/Navigation/Navigation';
import Body from './components/features/Body/Body';
import Routes from 'react-router-dom'
import Footer from './components/features/Footer/Footer'

function App() {
  return (
    <Container>
     <Navigation />
  
     <Body />
    <Footer />
    </Container>
  );
}

export default App;
