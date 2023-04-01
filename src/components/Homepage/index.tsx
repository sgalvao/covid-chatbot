import { api } from "@/config/axios-config";
import { FormEvent, useEffect, useState } from "react";
import * as S from "./styles";

type MessageProps = {
  message: string;
  isSended?: boolean;
};

export const Homepage = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [completion, setCompletion] = useState<MessageProps>();

  useEffect(() => {
    if (completion) {
      setMessages((current) => [...current, completion]);
    }
  }, [completion]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const message = {
      message: prompt.includes("?") ? prompt : `${prompt}?`,
      isSended: true,
    };
    setMessages((current) => [...current, message]);
    setPrompt("");

    console.log(message.message);
    const { data } = await api.post("/prompt", {
      prompt,
    });

    const response = {
      message: data.completion,
      isSended: false,
    };

    setCompletion(response);
  };

  return (
    <S.Container>
      <S.Title>CHATBOL - Tudo sobre futebol</S.Title>
      <S.ChatContent>
        <S.Display>
          {messages &&
            messages.map((message, index) => (
              <S.Message key={index} isSended={message.isSended}>
                {message.isSended
                  ? `Você: ${message.message}`
                  : `ChatBol: ${message.message}`}
              </S.Message>
            ))}
        </S.Display>
        <S.Form onSubmit={handleSubmit}>
          <S.Input value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          <S.SubmitButton type="submit">Enviar</S.SubmitButton>
        </S.Form>
      </S.ChatContent>
    </S.Container>
  );
};
