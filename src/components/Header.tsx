import logo from ".././logo.png";
import LanguageIcon from "@mui/icons-material/Language";
import {
  Toolbar,
  AppBar,
  Box,
  MenuItem,
  Typography,
  Alert,
} from "@mui/material";
import { useEffect, useState } from "react";

function Header() {
  const [fact, setFact] = useState("");
  const [isError, setError] = useState(false);
  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
      })
      .then((json) => {
        setError(false);
        setFact(json.fact);
      })
      .catch((error) => {
        console.log("error page not found ", error);
        setFact(error.toString());
        setError(true);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className="logo-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="fact-header">
            <Alert severity={isError ? "error" : "success"}>
              <div>{fact}</div>
            </Alert>
          </div>
          <div className="language">
            <MenuItem>
              <LanguageIcon sx={{ color: 374151 }} />
              <Typography>EN</Typography>
            </MenuItem>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
