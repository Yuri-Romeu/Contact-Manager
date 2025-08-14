import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contato {
     id: string;
     nome: string;
     email: string;
     telefone: string;
     classificacao: 'Familia' | 'Amigos' | 'Trabalho' | 'Outros';
}

const carregarContatos = (): Contato[] => {
     const dados = localStorage.getItem('contatos');
     return dados ? JSON.parse(dados) : [];
};

const initialState: Contato[] = carregarContatos();

const contatosSlice = createSlice({
     name: 'contatos',
     initialState,
     reducers: {
          adicionarContato: (state, action) => {
               state.push(action.payload);
               localStorage.setItem('contatos', JSON.stringify(state));
          },

          editarContato: (state, action) => {
               const { id, nome, email, telefone, classificacao } = action.payload;
               const contato = state.find(c => c.id === id);
               if (contato) {
                    contato.nome = nome;
                    contato.email = email;
                    contato.telefone = telefone;
                    contato.classificacao = classificacao;
               }
               localStorage.setItem('contatos', JSON.stringify(state));
          },

          excluirContato: (state, action: PayloadAction<string>) => {
               const novoState = state.filter(c => c.id !== action.payload);
               localStorage.setItem('contatos', JSON.stringify(novoState));
               return novoState;
          },
     },
});

export const { adicionarContato, excluirContato, editarContato } = contatosSlice.actions;
export default contatosSlice.reducer;
