import BarraLateral from './containers/BarraLateral';
import ListaDeContatos from './containers/ListaDeContatos';
import EstiloGlobal, { Container } from './styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import AdicionarTarefa from './Pages/AdicionarContato';

const rotas = createBrowserRouter([
     {
          path: '/',
          element: <Home />,
     },
     {
          path: '/adicionar-contato',
          element: <AdicionarTarefa />,
     },
]);

function App() {
     return (
          <>
               <EstiloGlobal />
               <Container>
                    <RouterProvider router={rotas} />
               </Container>
          </>
     );
}

export default App;
