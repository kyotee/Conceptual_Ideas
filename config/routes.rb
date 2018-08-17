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

  # image differences named routes
  get '/image_differences', to: 'image_differences#index'
  get '/image_differences_generate', to: 'image_differences#show'

  # courses named routes
  get '/courses_list', to: 'courses#index'
  get '/courses_personal', to: 'courses#show'
  get '/courses_create', to: 'courses#new'
  post '/courses_create', to: 'courses#create'
  get '/courses_edit', to: 'courses#edit'
  patch '/courses_edit', to: 'courses#update'
  delete '/courses_delete', to: 'courses#destroy'
end
