const { Configuration, OpenAIApi } = require("openai");

export class OpenAi {
  constructor() {}

  async connect() {
    const configuration = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
    });
    const openai = new OpenAIApi(configuration);

    return openai;
  }
}
