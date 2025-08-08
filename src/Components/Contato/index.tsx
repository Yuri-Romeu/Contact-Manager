import { ContatoContainer, Email, Icon, Nome, Numero, IconDelete, Classificacao } from './styles';

type ContatoProps = {
     nome: string;
     email: string;
     telefone: string;
     classificacao: 'Familia' | 'Amigos' | 'Trabalho' | 'Outros';
};

const Contato = ({ nome, email, telefone, classificacao }: ContatoProps) => {
     return (
          <ContatoContainer>
               <Icon size={40} />
               <Nome>{nome}</Nome>
               <Numero>{telefone}</Numero>
               <Email>{email}</Email>
               <Classificacao>{classificacao}</Classificacao>
               <IconDelete size={20} />
          </ContatoContainer>
     );
};

export default Contato;
