import Route from '@ioc:Adonis/Core/Route'

Route.post('passwords/forgot', 'ForgotPassword/Main.store')
Route.post('passwords/reset/:token', 'ResetPassword/Main.store')
