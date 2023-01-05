import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

import OutlinedInput from "@mui/material/OutlinedInput";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { Formik, Field, Form } from "formik";

function LoginForm() {
  return (
    <div>
      <Card variant="outlined">
        <Formik
          initialValues={{
            email: "",
            retype: "",
            userpassword: "",
            policy: "",
          }}
          onSubmit={async (values) => {
            console.log(values);
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <CardContent>
              <Typography variant="h6" component="h2" color="#4b5768">
                Registrierung
              </Typography>
              <Typography className="title-form" variant="h5" component="h5">
                Wähle deine Zugangsdaten
              </Typography>

              <FormControl fullWidth={true}>
                <FormLabel htmlFor="email">E-Mail Adresse</FormLabel>
                <OutlinedInput
                  id="email"
                  name="email"
                  type="email"
                  aria-describedby="my-helper-text-email"
                  size="small"
                  placeholder="tierarzt@ta-ludwig.de"
                />
              </FormControl>
              <FormControl fullWidth={true}>
                <FormLabel htmlFor="Password">Password</FormLabel>
                <OutlinedInput
                  id="Password"
                  name="userpassword"
                  type="password"
                  size="small"
                  aria-describedby="my-helper-text-password"
                  placeholder="********"
                />
              </FormControl>
              <FormControl fullWidth={true}>
                <FormLabel htmlFor="PasswordWwiederholen">
                  Password wiederholen
                </FormLabel>
                <OutlinedInput
                  id="PasswordWwiederholen"
                  name="retype"
                  type="password"
                  size="small"
                  aria-describedby="my-helper-text-retype"
                  placeholder="********"
                />
              </FormControl>
              <FormControl fullWidth={true}>
                <FormControlLabel
                  className="form-checkbox"
                  name="policy"
                  control={<Checkbox />}
                  label="Ich habe die AGB und Datenschutzerklärung gelesen und stimme ausdrücklich zu."
                />
              </FormControl>
            </CardContent>
            <CardActions>
              <FormControl fullWidth={true}>
                <Button type="submit" variant="contained" size="large">
                  Registrieren
                </Button>
              </FormControl>
            </CardActions>
          </Form>
        </Formik>
        <CardContent>
          <FormControl fullWidth={true}>
            <Typography align="center" component="p" color="#4b5768">
              Du hast bereits ein Konto?{" "}
              <Link color="#5e35b1">Melde dich an.</Link>
            </Typography>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginForm;
