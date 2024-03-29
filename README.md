<h1 align="center">
  <img alt="Link Boss" title="Link Boss" src="https://github.com/CodeAkio/link-boss-api/blob/master/.github/logo.svg" width="300px" />
</h1>

<h3 align="center">
  Sistema de encurtamento de links (Like a Boss)
</h3>

<p align="center">
  <a href="#demonstração">Demonstração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#links">Links</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#utilização">Utilização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#testes">Testes</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

## Demonstração

<p align="center">
  <img alt="web" src="https://github.com/CodeAkio/link-boss-api/blob/master/.github/demo.gif" width="100%">
</p>

## Links
* [Mapa mental naming](https://mm.tt/map/2121157641?t=CxkaYNsBqh)
* [Imagens do logo](https://1drv.ms/u/s!AnU6ZyT58iI6g7dAkCBfUnyJ4fOVWQ?e=8RbMqC)
* [Projeto no Figma](https://www.figma.com/file/nWrm5togzXq3wtSiBFtcwc/LinkBoss?node-id=0%3A1)
* [Github Web](https://github.com/CodeAkio/link-boss-web)
* [Coleção do Insomnia](https://1drv.ms/u/s!AnU6ZyT58iI6g7dQaGke8-FM7an2LQ?e=6yruwI)
* [Kanban do projeto](https://www.meistertask.com/app/project/ttBqnlg9/linkboss)

## Tecnologias

* [Adonis.js](https://adonisjs.com/)
* [Lucid Filter](https://github.com/lookinlab/adonis-lucid-filter)
* [Lucid Soft Delete](https://github.com/lookinlab/adonis-lucid-soft-deletes)
* [Japa](https://docs.adonisjs.com/cookbooks/testing-adonisjs-apps#introducing-japa)
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

1. Instale o [Docker](https://docs.docker.com/engine/install/), [Docker Compose](https://docs.docker.com/compose/install/) e o [EditorConfig](https://editorconfig.org/#download).

2. Clone o projeto para sua máquina:
```console
$ git clone https://github.com/tech-seed/link-boss-api.git
```

3. Entre na pasta do projeto:
```console
$ cd link-boss-api
```

4. Renomeie o .env.example para .env e configure este arquivo:

5. Se estiver no MacOS ou Linux dê permissão de execução a um script do Docker:
```console
$ chmod +x .docker/entrypoint.sh
```

6. Prepare o ambiente com o seguinte comando:
```console
docker-compose build
```

7. Crie o banco de dados e rode as migrações:
```console
docker-compose exec app node ace migration:run
```

8. Levante o serviço com o seguinte comando:
```console
docker-compose up
```

9. Agora a API está disponível em http://localhost:3333/api/v1


10. Para acessar o terminal do app:
```bash
docker-compose exec app sh
```

## Testes
1. Crie um banco chamado <b>link_boss_test</b>, você poderá utilizar o PG Admin para isso, que roda em http://localhost:9000.

2. Acesse o terminal do container app:
```bash
docker-compose exec app sh
```

3. Rode os testes
```bash
node -r @adonisjs/assembler/build/register japaFile.ts
```
