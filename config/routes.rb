Rails.application.routes.draw do
  get 'users/new'

  # default view pages named routes
  root 'default_view_pages#home'
  get '/tutorial', to: 'default_view_pages#tutorial'
  get '/about', to: 'default_view_pages#about'
  get '/contact', to: 'default_view_pages#contact' 
end
