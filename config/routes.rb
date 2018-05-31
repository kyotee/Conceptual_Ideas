Rails.application.routes.draw do
  resources :users

  # default view pages named routes
  root 'default_view_pages#home'
  get '/tutorial', to: 'default_view_pages#tutorial'
  get '/about', to: 'default_view_pages#about'
  get '/contact', to: 'default_view_pages#contact'

  # user (sign up and sign in) named routes
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'

  # sessions (signup and signout) named routes
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # user application named routes
  get '/image_differences', to: 'image_differences#index'
  get '/image_differences_generate', to: 'image_differences#show'
end
