import { useEffect } from "react";
import "./App.css";

import CoverLetterCurator from "./pages/cover-letter-curator";
import logo from "../src/assets/images/logo192.png";
import { addSiteView } from "./analytics/view-call";
import Copyright from "./components/UI/copyright";

const App = () => {
  useEffect(() => {
    addSiteView();
  }, []);
  return (
    <div className="App">
      <header className="header" style={{ height: "20px" }}>
        <img
          src={logo}
          alt="brand logo"
          style={{
            width: "90px",
            position: "absolute",
            top: "10px",
            left: "10px",
            cursor: "pointer",
          }}
        />
      </header>
      <CoverLetterCurator />
      <Copyright />
    </div>
  );
};

export default App;
