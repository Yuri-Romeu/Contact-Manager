import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltroState {
     classificacao: string;
}

const initialState: FiltroState = {
     classificacao: 'Todos',
};

const filtroSlice = createSlice({
     name: 'filtro',
     initialState,
     reducers: {
          alterarClassificacao: (state, action: PayloadAction<string>) => {
               state.classificacao = action.payload;
          },
     },
});

export const { alterarClassificacao } = filtroSlice.actions;
export default filtroSlice.reducer;
