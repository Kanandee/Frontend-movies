import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import redux storage
import store from "./redux/store";
import { Provider } from 'react-redux'

// bootstrap
import "./custom-bootstrap.scss";
//import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
