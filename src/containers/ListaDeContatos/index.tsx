import Contato from '../../Components/Contato';
import { BotaoAdicionarContato, Container, Icon, ListaContatos, SearchInput } from './styles';
import { useAppSelector } from '../../store/hooks';
import { useState } from 'react';

const ListaDeContatos = () => {
     const contatos = useAppSelector(state => state.contatos);

     const [nomeBuscado, setNomeBuscado] = useState('');

     const buscarNome = (e: React.ChangeEvent<HTMLInputElement>) => {
          setNomeBuscado(e.target.value);
     };

     const contatosFiltrados = contatos.filter(contato =>
          contato.nome.toLowerCase().includes(nomeBuscado.toLowerCase()),
     );

     return (
          <Container>
               <div style={{ position: 'relative' }}>
                    <Icon />
                    <SearchInput
                         type="search"
                         placeholder="Search"
                         value={nomeBuscado}
                         onChange={buscarNome}
                    />
                    <BotaoAdicionarContato>Add Contact</BotaoAdicionarContato>
               </div>
               <ListaContatos>
                    {contatosFiltrados.map(contato => (
                         <Contato key={contato.id} {...contato} />
                    ))}
               </ListaContatos>
          </Container>
     );
};
export default ListaDeContatos;
