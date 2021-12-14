import Route from '@ioc:Adonis/Core/Route'

Route.post('sessions', 'Sessions/Main.store')
Route.delete('sessions', 'Sessions/Main.destroy').middleware('auth')
