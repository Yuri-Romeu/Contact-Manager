import { v4 as uuidv4 } from 'uuid';
import InputAddContato from '../../Components/InputAddContato';
import { Adicionar, Container, Icon, Select, Title } from './styles';
import { useAppDispatch } from '../../store/hooks';
import { useState, FormEvent } from 'react';
import { adicionarContato as adicionarContatoReducer } from '../../slices/contatosSlice';

const CriarContato = () => {
     const dispatch = useAppDispatch();
     const [nome, setNome] = useState('');
     const [email, setEmail] = useState('');
     const [telefone, setTelefone] = useState('');
     const [classificacao, setClassificacao] = useState('');

     const adicionarContato = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          dispatch(
               adicionarContatoReducer({
                    id: uuidv4(),
                    nome,
                    email,
                    telefone,
                    classificacao,
               }),
          );

          setNome('');
          setEmail('');
          setTelefone('');
          setClassificacao('');
     };

     return (
          <Container as={'form'} onSubmit={adicionarContato}>
               <Title>Criar Contato</Title>
               <Icon />

               <InputAddContato
                    id="Nome"
                    type="text"
                    placeholder="Digite Seu Nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
               />
               <InputAddContato
                    id="Email"
                    type="email"
                    placeholder="Digite Seu Email Principal"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
               />
               <InputAddContato
                    id="Telefone"
                    type="tel"
                    placeholder="Digite Seu Numero"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
               />
               <Select value={classificacao} onChange={e => setClassificacao(e.target.value)}>
                    <option value="">Selecione uma classificação</option>
                    <option value="Familia">Familia</option>
                    <option value="Amigos">Amigos</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Outros">Outros</option>
               </Select>

               <Adicionar as="button" type="submit">
                    Adicionar Contato
               </Adicionar>
          </Container>
     );
};

export default CriarContato;
