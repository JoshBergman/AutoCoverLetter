const makePrompt = (cl_info, fallback) => {
  const getProperty = (property) => {
    if (property) {
      return property;
    } else {
      return fallback;
    }
  };

  const extendPrompt = (extensionMsg, value) => {
    if (value) {
      if (value !== "" || value.length !== 0) {
        const promptAppend = extensionMsg + " ";
        const valuesAsString =  typeof value === "string" ? value : value.join(", ") + ". ";
        const returnMsg = promptAppend + valuesAsString;
        
        return returnMsg;
      }
    }

    return "";
  };


  //defining prompt variables and filling in any skipped values with fallback
  const firstName = getProperty(cl_info?.firstName, "John");
  const lastName = getProperty(cl_info?.lastName, "Doe");

  const skills = getProperty(cl_info?.cover_letter?.candidate_info?.skills, []);
  const accomplishments = getProperty(
    cl_info?.cover_letter?.candidate_info?.accomplishments, 
    []
  );

  const paragraphCount = getProperty(cl_info?.cover_letter?.paragraph_count, 2);
  const positionTitle = getProperty(cl_info?.cover_letter?.position_title, "generic");
  const companyName = getProperty(
    cl_info?.cover_letter?.company_info?.company_name, "Company"
  );

  const companyValues = getProperty(
    cl_info?.cover_letter?.company_info?.company_values, []
  );
  const companyConnection = getProperty(
    cl_info?.cover_letter?.company_info?.company_connection, ""
  );


  let prompt = `Write a ${paragraphCount} paragraph cover letter with the name ${firstName} ${lastName}, for a ${positionTitle} position at ${companyName}. `;
  prompt += extendPrompt("The candidate should include skills such as", skills);
  prompt += extendPrompt("The candidate should include accomplishments such as", accomplishments);

  prompt += extendPrompt("The letter should mention how the company and candidate share values such as", companyValues);
  prompt += extendPrompt("The letter should mention how the company and candidate share a connection such as", companyConnection);

  prompt += ` The cover letter should favor being authentic, eager, and individualistic over high level grammar. DO NOT include contact info at the top of the letter.`;

  return prompt;
};

module.exports = makePrompt;