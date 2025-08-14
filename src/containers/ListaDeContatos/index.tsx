import Contato from '../../Components/Contato';
import { BotaoAdicionarContato, Container, Icon, ListaContatos, SearchInput } from './styles';
import { useAppSelector } from '../../store/hooks';
import { useState } from 'react';

const ListaDeContatos = () => {
     const contatos = useAppSelector(state => state.contatos);
     const classificacaoSelecionada = useAppSelector(state => state.filtro.classificacao);

     const [nomeBuscado, setNomeBuscado] = useState('');

     const buscarNome = (e: React.ChangeEvent<HTMLInputElement>) => {
          setNomeBuscado(e.target.value);
     };

     const contatosFiltrados = contatos
          .filter(contato => contato.nome.toLowerCase().includes(nomeBuscado.toLowerCase()))
          .filter(contato =>
               classificacaoSelecionada === 'Todos'
                    ? true
                    : contato.classificacao === classificacaoSelecionada,
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
                    <BotaoAdicionarContato to="/adicionar-contato">
                         Add Contact
                    </BotaoAdicionarContato>
               </div>
               <ListaContatos>
                    {contatos.length === 0 && <p>Não há contatos cadastrados</p>}
                    {contatosFiltrados.length === 0 && contatos.length > 0 && (
                         <p>Contato não encontrado</p>
                    )}

                    {contatosFiltrados.map(contato => (
                         <Contato key={contato.id} {...contato} />
                    ))}
               </ListaContatos>
          </Container>
     );
};

export default ListaDeContatos;
