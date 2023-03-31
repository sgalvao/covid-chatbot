import { OpenAi } from "../config/open-provider";

export class PromptService {
  constructor(private readonly openAiProvider: OpenAi) {}

  async execute(prompt: string) {
    const openAi = await this.openAiProvider.connect();

    const response = await openAi.createCompletion({
      model: "text-davinci-003",
      prompt: `Você é um assistente especialista de COVID-19 e responde somente perguntas sobre este assunto porém só compreende português e ingles, caso o assunto principal seja desviado você se desculpa e diz que só entende sobre COVID-19, responda de forma informal e descontraída. \n\nHuman:${prompt}\nAI:\n`,
      temperature: 1,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });
    return {
      completion: response.data.choices[0].text,
    };
  }
}
