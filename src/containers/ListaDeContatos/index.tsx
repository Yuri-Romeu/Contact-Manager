import Contato from '../../Components/Contato';
import { BotaoAdicionarContato, Container, Icon, ListaContatos, SearchInput } from './styles';
import { useAppSelector } from '../../store/hooks';

const ListaDeContatos = () => {
     const contatos = useAppSelector(state => state.contatos);

     return (
          <Container>
               <div style={{ position: 'relative' }}>
                    <Icon />
                    <SearchInput type="search" placeholder="Search" />
                    <BotaoAdicionarContato>Add Contact</BotaoAdicionarContato>
               </div>
               <ListaContatos>
                    {contatos.map(contato => (
                         <Contato key={contato.id} {...contato} />
                    ))}
               </ListaContatos>
          </Container>
     );
};
export default ListaDeContatos;
