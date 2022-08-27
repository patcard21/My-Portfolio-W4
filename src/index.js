import * as React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectGrid from "./project-grid";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ProjectGrid />
    </StyledEngineProvider>
  </React.StrictMode>
);
