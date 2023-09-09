const makePrompt = (cl_info) => {
  const firstName = cl_info.firstName || "first";
  const lastName = cl_info.lastName || "last";

  const skills = cl_info.cover_letter.candidate_info.skills || false;
  const accomplishments =
    cl_info.cover_letter.candidate_info.accomplishments || false;

  const paragraphCount = cl_info.cover_letter.paragraph_count || 2;
  const positionTitle = cl_info.cover_letter.position_title || "position";
  const companyName =
    cl_info.cover_letter.company_info.company_name || "company";
  const companyValues =
    cl_info.cover_letter.company_info.company_values || false;
  const companyConnection =
    cl_info.cover_letter.company_info.company_connection || false;

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
    prompt += ` Mention how the cadidate and company share the following:`;
  }
  if (companyValues) {
    prompt += ` Values such as ${companyValues.join(", ")}.`;
  }
  if (companyConnection) {
    prompt += ` Connection: ${companyConnection}.`;
  }
  prompt += ` The cover letter should be written in a professional tone but should seem authentic.`;

  return prompt;
};

module.exports = makePrompt;
