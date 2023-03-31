import { OpenAi } from "@/config/open-provider";
import { PromptService } from "@/services/prompt-service";

export const makePromptService = () => {
  const openaiProvider = new OpenAi();
  const promptService = new PromptService(openaiProvider);
  return promptService;
};
