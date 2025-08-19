Ps.: Por causa de problemas pessoais, não consegui deixar o projeto pixel perfect como pedido. No entanto, desenvolvi o mesmo o máximo possível para ter alguma entrega e, se for possível, ser considerado tanto para esta vaga como para futuras vagas. Ainda assim, caso desconsiderem minha candidatura, entenderei devido ao fato de não ter conseguido finalizar o mesmo.

## Executando o projeto

### Executando com Docker

Para executar o projeto com Docker, siga estas etapas:

1.  Compile a imagem Docker:

```bash
docker build -t teste-front-end .
```

2.  Execute o contêiner Docker:

```bash
docker run -p 3000:3000 teste-front-end
```

A aplicação estará disponível em http://localhost:3000.

### Executando localmente

Para executar o projeto localmente, siga estas etapas:

1.  Instale as dependências:

```bash
npm install
```

2.  Execute o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em http://localhost:3000.
