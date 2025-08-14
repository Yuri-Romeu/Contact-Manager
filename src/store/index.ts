import { configureStore } from '@reduxjs/toolkit';

import contatosReducer from '../slices/contatosSlice';
import filtroReducer from '../slices/filtroSlice';

const store = configureStore({
     reducer: {
          contatos: contatosReducer,
          filtro: filtroReducer,
     },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
