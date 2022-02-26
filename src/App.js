import { BrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";
import { ColorModeDataProvider } from "./Context/ThemeContext/ColorModeContext";
import Body from "./Body";

function App() {
  return (
    <>
      <BrowserRouter>
        <ColorModeDataProvider>
          <Body />
        </ColorModeDataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
