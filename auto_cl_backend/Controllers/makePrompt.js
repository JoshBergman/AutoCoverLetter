const makePrompt = (cl_info) => {
  const getProperty = (property) => {
    if (property) {
      return property;
    } else {
      console.error("Error: Property is undefined - " + property);
      return false;
    }
  };

  const firstName = getProperty(cl_info?.firstName);
  const lastName = getProperty(cl_info?.lastName);

  const skills = getProperty(cl_info?.cover_letter?.candidate_info?.skills);
  const accomplishments = getProperty(
    cl_info?.cover_letter?.candidate_info?.accomplishments
  );

  const paragraphCount = getProperty(cl_info?.cover_letter?.paragraph_count);
  const positionTitle = getProperty(cl_info?.cover_letter?.position_title);
  const companyName = getProperty(
    cl_info?.cover_letter?.company_info?.company_name
  );

  const companyValues = getProperty(
    cl_info?.cover_letter?.company_info?.company_values
  );
  const companyConnection = getProperty(
    cl_info?.cover_letter?.company_info?.company_connection
  );

  let prompt = `Write a ${paragraphCount} paragraph cover letter with the name ${firstName} ${lastName}, for a ${positionTitle} position at ${companyName}.`;

  if (skills || accomplishments) {
    prompt += ` Incorporate the following:`;
    if (skills) {
      prompt += ` Skills such as ${skills.join(", ")}.`;
    }
    if (accomplishments) {
      prompt += ` Accomplishments such as ${accomplishments.join(", ")}.`;
    }
  }

  if (companyValues || companyConnection) {
    prompt += ` Mention how the candidate and company share the following:`;
  }

  if (companyValues) {
    prompt += ` Values such as ${companyValues.join(", ")}.`;
  }
  if (companyConnection) {
    prompt += ` Connection: ${companyConnection}.`;
  }

  prompt += ` The cover letter should be written in a professional tone but should seem authentic, also do not include contact info at the top of the letter.`;

  return prompt;
};

module.exports = makePrompt;
