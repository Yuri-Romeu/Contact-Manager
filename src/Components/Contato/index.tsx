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
} from './styles';

import { useAppDispatch } from '../../store/hooks';
import { excluirContato } from '../../slices/contatosSlice';

type ContatoProps = {
     id: number;
     nome: string;
     email: string;
     telefone: string;
     classificacao: 'Familia' | 'Amigos' | 'Trabalho' | 'Outros';
};

const Contato = ({ id, nome, email, telefone, classificacao }: ContatoProps) => {
     const dispatch = useAppDispatch();
     return (
          <ContatoContainer>
               <Icon />
               <Nome>{nome}</Nome>
               <Numero>{telefone}</Numero>
               <Email>{email}</Email>
               <Classificacao>{classificacao}</Classificacao>
               <IconEdit />
               <IconDeleteWrapper onClick={() => dispatch(excluirContato(id))}>
                    <IconDelete />
               </IconDeleteWrapper>
          </ContatoContainer>
     );
};

export default Contato;
