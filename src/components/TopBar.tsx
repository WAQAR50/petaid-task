import Link from "@mui/material/Link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="topbar">
      <div className="back">
        <ChevronLeftIcon />
        <Link
          component="button"
          variant="body2"
          align="left"
          gutterBottom={true}
          onClick={() => {
            console.info("I'm a button.");
            navigate(-1);
          }}
        >
          zuruck
        </Link>
      </div>
      <div className="close">
        <Link
          component="button"
          variant="body2"
          align="right"
          onClick={() => {
            console.info("I'm a button.");
            navigate(1);
          }}
        >
          Abberchen
        </Link>{" "}
        <CloseIcon />
      </div>
    </div>
  );
}

export default TopBar;
