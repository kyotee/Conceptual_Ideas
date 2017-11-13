Rails.application.routes.draw do
  resources :users

  # sessions (signup and signout) named routes
  get '/login', to: 'sessions/new'
  post '/login', to: 'sessions/create'
  delete '/login', to: 'sessions/destroy'

  # default view pages named routes
  root 'default_view_pages#home'
  get '/tutorial', to: 'default_view_pages#tutorial'
  get '/about', to: 'default_view_pages#about'
  get '/contact', to: 'default_view_pages#contact'
end
