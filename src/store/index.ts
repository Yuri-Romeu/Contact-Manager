import { configureStore } from '@reduxjs/toolkit';

import contatosReducer from '../slices/contatosSlice';

const store = configureStore({
     reducer: {
          contatos: contatosReducer,
     },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
