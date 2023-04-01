# CHATBOT - Futebol Mundial

[![GitHub license](https://img.shields.io/github/license/sgalvao/covid-chatbot.svg)](https://github.com/sgalvao/covid-chatbot/blob/main/LICENSE)

O CHATBOL é um chatbot especialista em história do futebol, desenvolvido utilizando a API da OpenAI com fine-tuning no modelo Curie. O objetivo do projeto é oferecer uma solução eficaz para a busca e apresentação de informações históricas sobre o futebol.

O modelo Curie é uma das arquiteturas de rede neural mais avançadas e eficazes disponíveis atualmente para o processamento de linguagem natural. Utilizando técnicas de aprendizado de máquina, o CHATBOL foi treinado para compreender perguntas em linguagem natural e gerar respostas coerentes e precisas sobre fatos históricos do futebol.

Além disso, o CHATBOL é capaz de personalizar suas respostas de acordo com as preferências e interesses específicos do usuário, tornando a interação com o chatbot ainda mais eficiente e relevante. Isso é possível graças ao uso de técnicas avançadas de processamento de linguagem natural, que permitem ao chatbot compreender o contexto da pergunta e gerar respostas personalizadas.

O CHATBOL é um exemplo de como a inteligência artificial pode ser utilizada para criar soluções eficazes e inovadoras para a busca de informações históricas em diferentes áreas. A solução oferecida pelo chatbot é capaz de auxiliar estudantes, pesquisadores e entusiastas do futebol na busca por informações precisas e relevantes sobre a história do esporte.

O projeto do CHATBOL é altamente escalável e pode ser facilmente adaptado para outras áreas de conhecimento, permitindo que a solução seja utilizada para diferentes tipos de pesquisas e estudos.

[Link de acesso ao demo do projeto](https://chatbol.vercel.app/)

## Tecnologias Utilizadas

- NextJS
- OpenAi API
- Axios

### Requisitos

- NodeJs: ^16.x.x

### Instalação

para instalar as dependências

> yarn install

ou

> npm install

## Decisões Arquiteturais

### Plataforma utilizada

Para o desenvolvimento do algoritmo conversacional, foi utilizada a plataforma da OpenAI. A plataforma oferece diversos modelos de linguagem pré-treinados, que podem ser utilizados para diversas aplicações, incluindo chatbots.

### Dataset utilizado

Criei um Dataset com algumas perguntas em ingles e português que costumam ser comuns relacionadas a futebol. O processo de criação foi relativamente simples e rapido, eu utilizei o conhecimento previo do modelo _Davinci_ para que ele gerasse perguntas pra mim e pedi para que gerasse perguntas derivadas daquelas perguntas geradas anteriormente e logo após eu formatei tudo no padrão requisitado da OpenAi

> {"prompt": "QUESTION", "completion": "ANSWER"}

E fiz o upload do dataset para que pudesse iniciar o treinamento do modelo.

### Fine-tuning

Para adaptar o modelo de linguagem pré-treinado às perguntas e respostas relacionadas à Futebol, foi realizado um processo de fine-tuning utilizando o modelo Curie. O fine-tuning foi realizado utilizando o dataset mencionado anteriormente.

### Fluxo de conversa

O fluxo de conversa do algoritmo foi definido da seguinte forma:

O usuário faz uma pergunta relacionada à futebol;
O algoritmo analisa a pergunta e busca uma resposta no modelo de linguagem pré-treinado fine-tuned com o dataset;
O algoritmo retorna a resposta encontrada para o usuário.

### Problemas e detalhes a serem corrgidos

Durante a execução de testes e criação de fine-tunings o preço limite da OpenAi foi excedido impossibilitando um treinamento adequado ao modelo em questão.
Podendo então haver alguns problemas com respostas em linguagens diferentes.

### Pontos de melhoria

- Adicionar maior suporte a linguagem informal.
- Aumentar o dataset de conhecimento enriquecendo a base de conhecimento do modelo.
