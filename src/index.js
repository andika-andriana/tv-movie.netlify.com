import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Routes from "./routes";
import { createStore } from "redux";
import { Provider } from "react-redux";

// global state
const stateFilm = {
  activeItem: "beranda"
};

// reducer
const reducerFilm = (state = stateFilm, action) => {
  switch (action.type) {
    case "ACTIVE_ITEM":
      var stateActiveItem = { ...state, activeItem: action.activeItem };
      return stateActiveItem;
    default:
      return state;
  }
};

// store
const store = createStore(reducerFilm);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
