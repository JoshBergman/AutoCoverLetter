const OpenAI = require("openai");

exports.v1_auto_cl = async (req, res) => {
  console.log("Running autocl");

  //retrieve api key
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("Api key not found");
    throw new Error("API KEY Error");
  }

  //set api key
  const configuration = {
    apiKey: apiKey,
  };

  // OpenAIApi initialization
  const openai = new OpenAI(configuration);

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            "Hello! This is a test of an api, please tell me a funny joke to know you got this request! Cheers!",
        },
      ],
    });
    console.log(response);
    res.status(200).json({ message: response.choices[0].message });
  } catch (error) {
    res.status(500).json({ error: "Error - " + error });
  }
};
