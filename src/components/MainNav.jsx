import * as React from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";

export default function MainNav() {
  const [navValue, setNavValue] = React.useState("trending");

  const handleChange = (event, newValue) => {
    console.log(event);
    setNavValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        bgcolor: "background.default",
        color: "text.primary",
      }}
      value={navValue}
      onChange={handleChange}
    >
      <BottomNavigationAction
        component={Link}
        to="/Trending"
        label="Trending"
        value="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/search"
        label="Search"
        value="Search"
        icon={<FindInPageIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/about"
        label="About"
        value="About"
        icon={<DeviceUnknownIcon />}
      />
    </BottomNavigation>
  );
}
