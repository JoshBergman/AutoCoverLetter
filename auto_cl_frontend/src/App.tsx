import { useEffect } from "react";
import "./App.css";

import CoverLetterCurator from "./pages/cover-letter-curator";
import { addSiteView } from "./analytics/view-call";
import Copyright from "./components/UI/copyright";

const App = () => {
  useEffect(() => {
    addSiteView();
  }, []);
  return (
    <div className="App">
      <header className="header">Auto Cover Letter</header>
      <CoverLetterCurator />
      <Copyright />
    </div>
  );
};

export default App;
