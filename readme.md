# RDO-Online Backend

Este repositório contém o código-fonte do backend para o projeto RDO-Online, uma aplicação em desenvolvimento para simplificar o registro diário e gestão de obras na construção civil.

## Repositório

- [RDO-Online-BDC-API](https://github.com/evertonccarvalho/RDO-Online-BDC-API)

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- JSON Web Token (JWT)
- Outras dependências listadas no [package.json]

## Funcionalidades Principais em Desenvolvimento

1. **Autenticação Segura:** Implementando sistema de login para garantir acesso autorizado.
2. **Registro Diário Simplificado:** Aperfeiçoando o registro de atividades em canteiros de obras.
3. **Gestão de Obras:** Desenvolvendo ferramentas para uma gestão eficiente e organizada das atividades.

## Desenvolvimento em Progresso

Este backend está em constante aprimoramento. Contribuições, feedbacks e colaborações são bem-vindos!

## Padrão de Desenvolvimento

Experimentamos o padrão do GOF Repository Singleton para aprimorar a organização e manipulação de dados.

## Como Executar Localmente

1. Clone o repositório: `git clone https://github.com/evertonccarvalho/RDO-Online-BDC-API.git`
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Execute o comando Prisma para aplicar as migrações no banco de dados: `npx prisma db push`
5. Execute o servidor: `npm run dev`

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch para a sua feature (`git checkout -b feature/sua-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça push para a branch (`git push origin feature/sua-feature`).
5. Abra um Pull Request.

# Postman Collection

Para facilitar o teste e exploração dos endpoints da API, fornecemos uma coleção do Postman pronta para uso.

- [RDO-BDC.postman_collection](RDO-BDC.postman_collection)

## Como Usar

1. Baixe a coleção do Postman.
2. Abra o aplicativo Postman.
3. Importe a coleção usando o botão "Import" no canto superior esquerdo.
4. Selecione o arquivo `RDO-BDC.postman_collection` que você baixou.
5. A coleção agora estará disponível no seu ambiente Postman.

Dentro da coleção, você encontrará solicitações predefinidas para os principais endpoints da API, com exemplos de dados de solicitação e resposta.

**Nota:** Lembre-se de ajustar a base URL na coleção de acordo com o ambiente de execução (por exemplo, ambiente local, desenvolvimento ou produção).

Certifique-se de configurar corretamente as variáveis de ambiente, se necessário, para autenticação e outras configurações específicas do seu projeto.
