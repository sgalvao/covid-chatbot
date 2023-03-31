# CHATBOT - Futebol Mundial

[![GitHub license](https://img.shields.io/github/license/sgalvao/covid-chatbot.svg)](https://github.com/sgalvao/covid-chatbot/blob/main/LICENSE)

O chatbot desenvolvido é um especialista em COVID-19 e utiliza o modelo Curie da OpenAI. Com esse modelo, o chatbot é capaz de compreender de forma ainda mais precisa as perguntas dos usuários e fornecer respostas mais personalizadas e adaptadas às necessidades de cada indivíduo.

O chatbot é capaz de fornecer informações atualizadas sobre o vírus, como sintomas, prevenção, tratamentos e estatísticas de casos e mortes. Além disso, o modelo Curie permite que o chatbot seja personalizado com base em dados específicos do usuário ou do setor, permitindo que forneça informações ainda mais relevantes e precisas sobre a pandemia.

Com a utilização do modelo Curie, o chatbot é capaz de gerar respostas mais coerentes e naturais, tornando a interação com o usuário ainda mais agradável e eficiente. O chatbot pode ser utilizado por profissionais de saúde para ajudar a conscientizar as pessoas sobre a importância da prevenção e do tratamento adequado do COVID-19, além de ajudar a esclarecer dúvidas e fornecer informações precisas e confiáveis sobre a pandemia.

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

> {"prompt": "<prompt text>", "completion": "<ideal generated text>"}

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
