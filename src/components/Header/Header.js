import "./Header.css";
import React from "react";
import ColorModeContext from "../../Context/ThemeContext/ColorModeContext";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

const Header = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Paper
      className="header"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header1">
          <h1> Entertainment Zone </h1>
        </div>
      </Link>
      <div>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          <span className="themeMenuText">{theme.palette.mode} mode</span>
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </div>
    </Paper>
  );
};

export default Header;
