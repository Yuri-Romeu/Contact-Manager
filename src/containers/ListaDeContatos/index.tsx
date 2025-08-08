import Contato from '../../Components/Contato';
import { BotaoAdicionarContato, Container, Icon, ListaContatos, SearchInput } from './styles';

const ListaDeContatos = () => {
     return (
          <Container>
               <div style={{ position: 'relative' }}>
                    <Icon size={22} />
                    <SearchInput type="search" placeholder="Search" />
                    <BotaoAdicionarContato>Add Contact</BotaoAdicionarContato>
               </div>
               <ListaContatos>
                    <Contato
                         nome="Fulano"
                         email="fulano@ig.com.br"
                         telefone="(11) 99999-9999"
                         classificacao="Familia"
                    />
                    <Contato
                         nome="Ciclano"
                         email="ciclano@ig.com.br"
                         telefone="(55) 88888-8888"
                         classificacao="Trabalho"
                    />
                    <Contato
                         nome="Beltrano"
                         email="beltrano@ig.com.br"
                         telefone="(32) 77777-7777"
                         classificacao="Amigos"
                    />
               </ListaContatos>
          </Container>
     );
};
export default ListaDeContatos;
