import Route from '@ioc:Adonis/Core/Route'

Route.get('short-links', 'ShortLinks/Main.index')
Route.post('short-links', 'ShortLinks/Main.store')
