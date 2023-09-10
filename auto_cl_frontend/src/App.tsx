import { useEffect } from "react";
import "./App.css";

import CoverLetterCurator from "./pages/cover-letter-curator";
import { addSiteView } from "./analytics/view-call";

const App = () => {
  useEffect(() => {
    addSiteView();
  }, []);
  return (
    <div className="App">
      <header className="header">Auto Cover Letter</header>
      <CoverLetterCurator />
    </div>
  );
};

export default App;
