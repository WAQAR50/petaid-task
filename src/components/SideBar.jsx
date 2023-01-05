import logo from ".././petaid-register.png";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { LineWeight } from "@mui/icons-material";
function SideBar() {
  return (
    <div>
      <div>
        {" "}
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          In wenigen Schritten Patienten online empfangen
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Konto"
          name="radio-buttons-group"
          sx={{
            backgroundColor: "none",
            "& .MuiRadio-root": { color: "#a5a2ac" },
            "& .MuiRadio-root + span": { color: "#a5a2ac" },
            "& .MuiRadio-root.Mui-checked": { color: "#8f8b97" },
            "& .MuiRadio-root.Mui-checked + span": { fontWeight: 600 },
          }}
        >
          <FormControlLabel
            value="Konto"
            control={<Radio />}
            label="Konto erstellen "
          />
          <FormControlLabel
            value="Profil"
            control={<Radio />}
            label="Profil ausfüllen"
          />
          <FormControlLabel
            value="Verfügbarkeit"
            control={<Radio />}
            label="Verfügbarkeit festlegen"
          />

          <FormControlLabel
            value="Bankverbindungn"
            control={<Radio />}
            label="Bankverbindung angeben"
          />
          <FormControlLabel
            value="Nutzungsbedingungen"
            control={<Radio />}
            label="Nutzungsbedingungen akzeptieren"
          />
          <FormControlLabel
            value="Patienten"
            control={<Radio />}
            label="Patienten online empfangen"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default SideBar;
