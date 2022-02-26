import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { deepOrange, orange } from "@mui/material/colors";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function ColorModeDataProvider({ children }) {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: orange,
            divider: "#fff",
            background: {
              default: deepOrange[300],
              paper: deepOrange[100],
            },
            text: {
              primary: deepOrange[900],
              secondary: deepOrange[900],
            },
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: "#1a0000",
            },
            text: {
              primary: "#fff",
              secondary: "#fff",
            },
          }),
    },
  });

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ColorModeContext;
