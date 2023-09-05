import { useState } from "react";
import CoverLetterForm from "../components/form-components/cover-letter-form";

const CoverLetterCurator = () => {
  const [showingForm, setShowingForm] = useState(true);

  const toggleShowingForm = () => {
    setShowingForm((prevState) => !prevState);
  };

  return (
    <div>
      {showingForm && <CoverLetterForm toggleShowingForm={toggleShowingForm} />}
    </div>
  );
};

export default CoverLetterCurator;
