import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './slices/counter';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;