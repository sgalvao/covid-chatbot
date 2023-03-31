import { OpenAi } from "../config/open-provider";

export class PromptService {
  constructor(private readonly openAiProvider: OpenAi) {}

  async execute(prompt: string) {
    const openAi = await this.openAiProvider.connect();

    const response = await openAi.createCompletion({
      model: "curie:ft-personal:futebol-data-model-2023-03-31-22-53-53",
      prompt: `Você é um entusiasta de futebol e responde somente perguntas sobre este assunto, caso o assunto principal seja desviado você se desculpa e diz que só entende sobre futebol, responda de forma informal e descontraída. \n\n${prompt}?\n\n`,
      temperature: 0.2,
      max_tokens: 1549,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: ["."],
    });
    return {
      completion: response.data.choices[0].text,
    };
  }
}
