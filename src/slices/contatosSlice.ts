import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contato {
     id: string;
     nome: string;
     email: string;
     telefone: string;
     classificacao: 'Familia' | 'Amigos' | 'Trabalho' | 'Outros';
}

const initialState: Contato[] = [
     {
          id: '1',
          nome: 'Yuri Romeu',
          email: 'Yuri@gmail.com',
          telefone: '(11) 99999-9999',
          classificacao: 'Familia',
     },
     {
          id: '2',
          nome: 'Ciclano',
          email: 'ciclano@ig.com.br',
          telefone: '(55) 88888-8888',
          classificacao: 'Trabalho',
     },
     {
          id: '3',
          nome: 'Beltrano',
          email: 'beltrano@ig.com.br',
          telefone: '(32) 77777-7777',
          classificacao: 'Amigos',
     },
     {
          id: '4',
          nome: 'João',
          email: 'joao@ig.com.br',
          telefone: '(21) 66666-6666',
          classificacao: 'Outros',
     },
     {
          id: '5',
          nome: 'Maria',
          email: 'maria@ig.com.br',
          telefone: '(11) 55555-5555',
          classificacao: 'Familia',
     },
];

const contatosSlice = createSlice({
     name: 'contatos',
     initialState,
     reducers: {
          adicionarContato: (state, action) => {
               state.push(action.payload);
          },
          editarContato: (state, action) => {
               const { id, nome, email, telefone, classificacao } = action.payload;
               const contato = state.find(contato => contato.id === id);
               if (contato) {
                    contato.nome = nome;
                    contato.email = email;
                    contato.telefone = telefone;
                    contato.classificacao = classificacao;
               }
          },
          excluirContato: (state, action: PayloadAction<string>) => {
               return state.filter(contato => contato.id !== action.payload);
          },
     },
});

export const { adicionarContato, excluirContato, editarContato } = contatosSlice.actions;
export default contatosSlice.reducer;
