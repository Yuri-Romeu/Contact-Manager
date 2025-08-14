import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { editarContato, excluirContato } from '../../slices/contatosSlice';
import {
     ContatoContainer,
     Email,
     Icon,
     Nome,
     Numero,
     IconDeleteWrapper,
     Classificacao,
     IconEdit,
     IconDelete,
     IconEditWrapper,
     Input,
     Select,
     IconSave,
} from './styles';

type ContatoProps = {
     id: string;
     nome: string;
     email: string;
     telefone: string;
     classificacao: 'Familia' | 'Amigos' | 'Trabalho' | 'Outros';
};

const Contato = ({ id, nome, email, telefone, classificacao }: ContatoProps) => {
     const dispatch = useAppDispatch();
     const [isEditing, setIsEditing] = useState(false);
     const [nomeEdit, setNomeEdit] = useState(nome);
     const [emailEdit, setEmailEdit] = useState(email);
     const [telefoneEdit, setTelefoneEdit] = useState(telefone);
     const [classificacaoEdit, setClassificacaoEdit] = useState(classificacao);

     const handleSave = () => {
          dispatch(
               editarContato({
                    id,
                    nome: nomeEdit,
                    email: emailEdit,
                    telefone: telefoneEdit,
                    classificacao: classificacaoEdit,
               }),
          );
          setIsEditing(false);
     };

     const handleDelete = () => {
          dispatch(excluirContato(id));
     };

     return (
          <ContatoContainer>
               <Icon />

               {isEditing ? (
                    <Input value={nomeEdit} onChange={e => setNomeEdit(e.target.value)} />
               ) : (
                    <Nome>{nome}</Nome>
               )}

               {isEditing ? (
                    <Input value={telefoneEdit} onChange={e => setTelefoneEdit(e.target.value)} />
               ) : (
                    <Numero>{telefone}</Numero>
               )}

               {isEditing ? (
                    <Input value={emailEdit} onChange={e => setEmailEdit(e.target.value)} />
               ) : (
                    <Email>{email}</Email>
               )}

               {isEditing ? (
                    <Select
                         value={classificacaoEdit}
                         onChange={e => setClassificacaoEdit(e.target.value as any)}
                    >
                         <option value="Familia">Familia</option>
                         <option value="Amigos">Amigos</option>
                         <option value="Trabalho">Trabalho</option>
                         <option value="Outros">Outros</option>
                    </Select>
               ) : (
                    <Classificacao>{classificacao}</Classificacao>
               )}

               <IconEditWrapper onClick={() => setIsEditing(!isEditing)}>
                    <IconEdit isActive={isEditing} />
                    {isEditing && (
                         <span onClick={handleSave}>
                              <IconSave />
                         </span>
                    )}
               </IconEditWrapper>

               <IconDeleteWrapper onClick={handleDelete}>
                    <IconDelete />
               </IconDeleteWrapper>
          </ContatoContainer>
     );
};

export default Contato;
