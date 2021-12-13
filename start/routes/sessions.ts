import Route from '@ioc:Adonis/Core/Route'

Route.resource('sessions', 'Sessions/Main')
  .only(['store', 'destroy'])
  .middleware({
    destroy: ['auth'],
  })
