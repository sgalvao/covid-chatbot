import { makePromptService } from "@/main/factory";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt } = req.body;

  if (req.method === "POST") {
    const response = await makePromptService().execute(prompt);
    return res.status(200).json(response);
  }

  return res.status(400).json({ error: "Not Allowed Method" });
}
