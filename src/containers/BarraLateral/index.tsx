import { Classificacao, ClassificacaoItem, Container, Title } from './styles';

const BarraLateral = () => {
     return (
          <Container>
               <Title>Contact</Title>
               <Classificacao>
                    <ClassificacaoItem isActive>Familia</ClassificacaoItem>
                    <ClassificacaoItem>Amigos</ClassificacaoItem>
                    <ClassificacaoItem>Trabalho</ClassificacaoItem>
                    <ClassificacaoItem>Outros</ClassificacaoItem>
               </Classificacao>
          </Container>
     );
};

export default BarraLateral;
