import { Classificacao, ClassificacaoItem, Container, Title, Numeros } from './styles';
import { useAppSelector } from '../../store/hooks';

const BarraLateral = () => {
     const contatos = useAppSelector(state => state.contatos);

     return (
          <Container>
               <Title>Contact</Title>
               <Classificacao>
                    <ClassificacaoItem isActive>
                         Todos <Numeros>{contatos.length}</Numeros>
                    </ClassificacaoItem>
                    <ClassificacaoItem>
                         Familia{' '}
                         <Numeros>
                              {
                                   contatos.filter(contato => contato.classificacao === 'Familia')
                                        .length
                              }
                         </Numeros>
                    </ClassificacaoItem>
                    <ClassificacaoItem>
                         Amigos{' '}
                         <Numeros>
                              {
                                   contatos.filter(contato => contato.classificacao === 'Amigos')
                                        .length
                              }
                         </Numeros>
                    </ClassificacaoItem>
                    <ClassificacaoItem>
                         Trabalho{' '}
                         <Numeros>
                              {
                                   contatos.filter(contato => contato.classificacao === 'Trabalho')
                                        .length
                              }
                         </Numeros>
                    </ClassificacaoItem>
                    <ClassificacaoItem>
                         Outros{' '}
                         <Numeros>
                              {
                                   contatos.filter(contato => contato.classificacao === 'Outros')
                                        .length
                              }
                         </Numeros>
                    </ClassificacaoItem>
               </Classificacao>
          </Container>
     );
};

export default BarraLateral;
