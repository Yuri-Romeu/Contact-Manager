import BarraLateral from './containers/BarraLateral';
import EstiloGlobal, { Container } from './styles';

function App() {
     return (
          <>
               <EstiloGlobal />
               <Container>
                    <BarraLateral />
               </Container>
          </>
     );
}

export default App;
