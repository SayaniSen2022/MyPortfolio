import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

const portfolioFont = '"Caskaydia Mono Nerd", monospace';
document.documentElement.dataset.theme = "dark";

// Keep theme changes within this visit and start each page load in dark mode.
let visitColorMode = "dark";
const colorModeManager = {
  type: "localStorage",
  get: () => visitColorMode,
  set: (value) => { visitColorMode = value; },
};

const theme = extendTheme({
  config: { initialColorMode: "dark", useSystemColorMode: false },
  styles: { global: { body: { bg: "var(--page-bg)", color: "var(--text)" } } },
  fonts: {
    body: portfolioFont,
    heading: portfolioFont,
    mono: portfolioFont,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
