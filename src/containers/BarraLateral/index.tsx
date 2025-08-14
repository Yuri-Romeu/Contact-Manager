import { Classificacao, ClassificacaoItem, Container, Title, Numeros } from './styles';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { alterarClassificacao } from '../../slices/filtroSlice';

const BarraLateral = () => {
     const contatos = useAppSelector(state => state.contatos);
     const classificacaoSelecionada = useAppSelector(state => state.filtro.classificacao);
     const dispatch = useAppDispatch();

     const mudarFiltro = (filtro: string) => {
          dispatch(alterarClassificacao(filtro));
     };

     const contar = (tipo: string) => contatos.filter(c => c.classificacao === tipo).length;

     return (
          <Container>
               <Title>Contact</Title>
               <Classificacao>
                    <ClassificacaoItem
                         isActive={classificacaoSelecionada === 'Todos'}
                         onClick={() => mudarFiltro('Todos')}
                    >
                         Todos <Numeros>{contatos.length}</Numeros>
                    </ClassificacaoItem>

                    <ClassificacaoItem
                         isActive={classificacaoSelecionada === 'Familia'}
                         onClick={() => mudarFiltro('Familia')}
                    >
                         Familia <Numeros>{contar('Familia')}</Numeros>
                    </ClassificacaoItem>

                    <ClassificacaoItem
                         isActive={classificacaoSelecionada === 'Amigos'}
                         onClick={() => mudarFiltro('Amigos')}
                    >
                         Amigos <Numeros>{contar('Amigos')}</Numeros>
                    </ClassificacaoItem>

                    <ClassificacaoItem
                         isActive={classificacaoSelecionada === 'Trabalho'}
                         onClick={() => mudarFiltro('Trabalho')}
                    >
                         Trabalho <Numeros>{contar('Trabalho')}</Numeros>
                    </ClassificacaoItem>

                    <ClassificacaoItem
                         isActive={classificacaoSelecionada === 'Outros'}
                         onClick={() => mudarFiltro('Outros')}
                    >
                         Outros <Numeros>{contar('Outros')}</Numeros>
                    </ClassificacaoItem>
               </Classificacao>
          </Container>
     );
};

export default BarraLateral;
