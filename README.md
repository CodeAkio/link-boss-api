<h1 align="center">
  <img alt="Link Boss" title="Link Boss" src="https://github.com/CodeAkio/link-boss-api/blob/master/.github/logo.svg" width="300px" />
</h1>

<h3 align="center">
  Sistema de encurtamento de links (Like a Boss)
</h3>

<p align="center">
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#utilização">Utilização</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

## Tecnologias

* [Adonis.js](https://adonisjs.com/)
* [Lucid Filter](https://github.com/lookinlab/adonis-lucid-filter)
* [Lucid Soft Delete](https://github.com/lookinlab/adonis-lucid-soft-deletes)
* [PostgreSQL](https://www.postgresql.org/)
* [Redis](https://redis.io/)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [UUID](https://github.com/uuidjs/uuid)
* [mjml](https://mjml.io/)
* [PHC Argon2](https://github.com/thetutlage/phc-argon2)
* [ShortID](https://www.npmjs.com/package/shortid)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

## Utilização

1. Instale o [Docker](https://docs.docker.com/engine/install/) e [Docker Compose](https://docs.docker.com/compose/install/).

2. Clone o projeto para sua máquina:
```console
$ git clone https://github.com/tech-seed/link-boss-api.git
```

3. Entre na pasta do projeto:
```console
$ cd link-boss-api
```

4. Se estiver no MacOS ou Linux dê permissão de execução a um script do Docker:
```console
$ chmod +x .docker/entrypoint.sh
```

5. Prepare o ambiente com o seguinte comando:
```console
docker-compose build
```

6. Crie o banco de dados e rode as migrações:
```console
docker-compose exec app node ace migration:run
```

7. Levante o serviço com o seguinte comando:
```console
docker-compose up
```

6. Agora a API está disponível em http://localhost:3333/api/v1


7. Para acessar o terminal do app:
```bash
docker-compose exec app sh
```
