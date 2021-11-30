import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "@algolia/ui-library/public/css/fragments.css";
import "./css/fragments.css";

import SearchPage from "./SearchPage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SearchPage />
  </StrictMode>,
  rootElement
);
