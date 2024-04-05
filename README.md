# 🏫 Rondon Class

Este repositório contém dois microservices desenvolvidos para fins educacionais, ainda em desenvolvimento ativo. Esses microservices são construídos usando ``Docker``, ``Docker`` ``Compose``, ``RabbitMQ``, ``AMQPLIB``, ``TypeScript`` e ``Node.js``, seguindo os princípios da Arquitetura Limpa e SOLID.

## 📝 Descrição

Este repositório hospeda dois microservices que desempenham funções específicas em um sistema de gestão acadêmica:

1. Serviço de Matrícula (enrollment-service): Este microserviço é responsável por gerenciar o processo de matrícula dos estudantes. Ele inclui lógica para criar, atualizar e recuperar informações de matrículas.

2. Serviço de Estudantes (students-service): Este microserviço trata do gerenciamento dos dados dos estudantes. Quando um novo estudante é criado, o serviço de estudantes adiciona uma mensagem na fila do RabbitMQ, contendo os dados do estudante. Essa mensagem é então consumida pelo serviço de matrícula, que cria uma matrícula para o estudante no sistema.

## 🚢 Começando

Para começar com esses microservices, certifique-se de ter o Docker e o Docker Compose instalados em sua máquina. Em seguida, siga estas etapas:

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório raiz do repositório clonado.
3. Execute o seguinte comando para iniciar os microservices:

```bash
docker-compose up --build
```

Este comando irá construir as imagens Docker e iniciar os contêineres para ambos os microservices, juntamente com o RabbitMQ.

## 🛠️ Tecnologias Utilizadas

- Docker 🐳
- Docker Compose 🐙
- RabbitMQ 🐰
- AMQP 🔗
- TypeScript 🟦
- Node.js 🟢
- Arquitetura Limpa 🏗️

## 📚 Saiba Mais

- [Documentação do Docker](https://docs.docker.com/)
- [Documentação do RabbitMQ](https://www.rabbitmq.com/docs)
- [Documentação do AMQP](https://amqp-node.github.io/amqplib/channel_api.html)
- [Documentação do TypeScript](https://www.typescriptlang.org/pt/docs/)
- [Princípios da Arquitetura Limpa](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

## 📣 Feedback

Agradeço qualquer feedback ou sugestões para melhorias. Sinta-se à vontade para abrir um issue ou enviar uma pull request se tiver alguma ideia para aprimorar este projeto!

Feliz Codificação! 💻✨
