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

          if (!nome || !email || !telefone || !classificacao) return alert('Fill in all fields');

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
               <Title>Create Contact</Title>
               <Icon />

               <InputAddContato
                    id="Name"
                    type="text"
                    placeholder="Enter Your Name"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
               />
               <InputAddContato
                    id="Email"
                    type="email"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
               />
               <InputAddContato
                    id="Phone"
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
               />
               <Select value={classificacao} onChange={e => setClassificacao(e.target.value)}>
                    <option value="">Select a rating</option>
                    <option value="Family">Family</option>
                    <option value="Friends">Friends</option>
                    <option value="Work">Work</option>
                    <option value="Others">Others</option>
               </Select>

               <Adicionar as="button" type="submit">
                    Add Contact
               </Adicionar>
          </Container>
     );
};

export default CriarContato;
