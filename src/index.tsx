import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// 타입스크립트에서 state의 자료형이 숫자나 문자열 둘다 허용하려면
// const [value, setValue] = useState<string | number>(0);
// setValue("zzzz");
