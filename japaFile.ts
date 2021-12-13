import 'reflect-metadata'
import { join } from 'path'
import execa from 'execa'
import getPort from 'get-port'
import { configure } from 'japa'
import sourceMapSupport from 'source-map-support'

process.env.NODE_ENV = 'testing'
process.env.PG_DB_NAME = 'link_boss_test'
process.env.LOG_LEVEL = 'fatal'
process.env.ADONIS_ACE_CWD = join(__dirname)
sourceMapSupport.install({ handleUncaughtExceptions: false })

async function runMigrations() {
  await execa.node('ace', ['migration:run'])
}

// Adicionado para limpar o banco após os testes
async function rollbackMigrations() {
  await execa.node('ace', ['migration:rollback'])
}

async function startHttpServer() {
  const { Ignitor } = await import('@adonisjs/core/build/src/Ignitor')
  process.env.PORT = String(await getPort())
  await new Ignitor(__dirname).httpServer().start()
}

configure({
  files: ['test/specs/**/*.spec.ts'],
  before: [runMigrations, startHttpServer],
  after: [rollbackMigrations],
})
