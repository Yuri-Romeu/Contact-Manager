import {
     Classificacao,
     ClassificacaoItem,
     Container,
     Title,
     Numeros,
     ClassificacaoItemLink,
} from './styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { alterarClassificacao } from '../../slices/filtroSlice';

type Props = {
     addContatos: boolean;
};

const BarraLateral = ({ addContatos }: Props = { addContatos: false }) => {
     const contatos = useAppSelector(state => state.contatos);
     const classificacaoSelecionada = useAppSelector(state => state.filtro.classificacao);
     const dispatch = useAppDispatch();

     const mudarFiltro = (filtro: string) => {
          dispatch(alterarClassificacao(filtro));
     };

     const contar = (tipo: string) => contatos.filter(c => c.classificacao === tipo).length;

     return (
          <Container>
               <Title>Contatos</Title>
               {addContatos && (
                    <>
                         <ClassificacaoItem isActive>Add Contacts</ClassificacaoItem>
                         <ClassificacaoItemLink to="/">Back</ClassificacaoItemLink>
                    </>
               )}

               {!addContatos && (
                    <Classificacao>
                         <ClassificacaoItem
                              isActive={classificacaoSelecionada === 'Todos'}
                              onClick={() => mudarFiltro('Todos')}
                         >
                              All <Numeros>{contatos.length}</Numeros>
                         </ClassificacaoItem>

                         <ClassificacaoItem
                              isActive={classificacaoSelecionada === 'Family'}
                              onClick={() => mudarFiltro('Family')}
                         >
                              Family <Numeros>{contar('Family')}</Numeros>
                         </ClassificacaoItem>

                         <ClassificacaoItem
                              isActive={classificacaoSelecionada === 'Friends'}
                              onClick={() => mudarFiltro('Friends')}
                         >
                              Friends <Numeros>{contar('Friends')}</Numeros>
                         </ClassificacaoItem>

                         <ClassificacaoItem
                              isActive={classificacaoSelecionada === 'Work'}
                              onClick={() => mudarFiltro('Work')}
                         >
                              Work <Numeros>{contar('Work')}</Numeros>
                         </ClassificacaoItem>

                         <ClassificacaoItem
                              isActive={classificacaoSelecionada === 'Others'}
                              onClick={() => mudarFiltro('Others')}
                         >
                              Others <Numeros>{contar('Others')}</Numeros>
                         </ClassificacaoItem>
                    </Classificacao>
               )}
          </Container>
     );
};

export default BarraLateral;
