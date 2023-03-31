import styled from "styled-components";

type Props = {
  isSended?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const ChatContent = styled.div`
  border: 1px solid #999999;
  border-radius: 1rem;
  padding: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: #f8f8f8;
  padding: 1rem;
  color: #000;
  outline: none;
  border-radius: 1rem 0rem 0 1rem;
  border: 1px solid #431c97;
`;

export const Display = styled.div`
  height: 60rem;
  width: 60rem;
  max-width: 60rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Message = styled.div<Props>`
  display: flex;
  max-width: 100%;
  border: 1px solid ${({ isSended }) => (isSended ? "green" : "blue")};
  border-radius: 1rem;
  padding: 1rem;
  margin: 0.5rem;
  font-size: 1.6rem;
  color: #fff;
`;

export const PromptCard = styled.div`
  padding: 1rem;
  border: 1px solid yellow;
  border-radius: 1rem;
  margin: 0.5rem;
`;

export const SubmitButton = styled.button`
  outline: none;
  border: none;
  padding: 1rem;
  border-radius: 0 1rem 1rem 0;
  background-color: #431c97;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;
