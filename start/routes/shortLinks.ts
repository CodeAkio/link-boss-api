import Route from '@ioc:Adonis/Core/Route'

Route.get('short-links/top', 'ShortLinks/Top.index')

Route.get('short-links', 'ShortLinks/Main.index')
Route.get('short-links/:search', 'ShortLinks/Main.show')
Route.post('short-links', 'ShortLinks/Main.store')
Route.delete('short-links/:search', 'ShortLinks/Main.destroy').middleware('auth')
