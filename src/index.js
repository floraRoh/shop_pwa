import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// const alertState = true;
const defaultState = [
  {
    id: 1,
    name: "자켓",
    quan: 2,
    price: 290000,
  },
  {
    id: 2,
    name: "바지",
    quan: 1,
    price: 140000,
  },
];

function alertReducer(state = true, action) {
  if (action.type === "close") {
    state = false;
    return state;
  } else {
    return state;
  }
}

function reducer(state = defaultState, action) {
  const found = state.findIndex((a) => {
    return a === action.index;
  });
  let copyState = [...defaultState];
  switch (action.type) {
    case "contentsAdd":
      if (found == true) {
        copyState[action.index].quan++;
      } else {
        copyState.push(action.payload);
        return copyState;
      }
    case "add":
      copyState[action.index].quan++;
      return copyState;
    case "minus":
      if (copyState[action.index].quan > 0) {
        copyState[action.index].quan--;
      }
      return copyState;
    default:
      return state;
  }
}

const store = createStore(combineReducers({ reducer, alertReducer }));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/shop_pwa">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
