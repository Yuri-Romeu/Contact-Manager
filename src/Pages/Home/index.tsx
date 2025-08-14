import BarraLateral from '../../containers/BarraLateral';
import ListaDeContatos from '../../containers/ListaDeContatos';

const Home = () => {
     return (
          <>
               <BarraLateral addContatos={false} />
               <ListaDeContatos />
          </>
     );
};

export default Home;
