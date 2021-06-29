import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./combineReducers";
import sagas from "./combineSagas";

const middlewares = [];

// const sagaMonitor =
//   process.env.NODE_ENV === 'development'
//     ? console.tron.createSagaMonitor()
//     : null;

// const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const sagaMiddleware = createSagaMiddleware();

// const tronMiddleware =
//   process.env.NODE_ENV === 'development'
//     ? console.tron.createEnhancer
//     : () => {};

middlewares.push(sagaMiddleware);

const conditionStore =
  process.env.NODE_ENV === "development"
    ? createStore(
        reducers,
        composeWithDevTools(applyMiddleware(...middlewares))
      )
    : createStore(reducers, applyMiddleware(...middlewares));

const store = conditionStore;

sagaMiddleware.run(sagas);

export { store };
