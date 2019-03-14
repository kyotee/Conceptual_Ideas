Rails.application.routes.draw do
  get 'minings/index'

  get 'bids/index'

  resources :users

  # default view pages named routes
  root 'default_view_pages#home'
  get '/tutorial', to: 'default_view_pages#tutorial'
  get '/about', to: 'default_view_pages#about'
  get '/contact', to: 'default_view_pages#contact'

  # user (sign up and sign in) and user monitoring named routes
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'
  get '/user_monitoring', to: 'users#index'
  get '/user_monitoring_profile/:id', to: 'users#show'
  delete '/user_monitoring_delete/:id', to: 'users#destroy'

  # sessions (sign in and sign out) named routes
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # image differences named routes
  get '/image_differences', to: 'image_differences#index'
  get '/image_differences_generate', to: 'image_differences#show'

  # courses named routes
  get '/courses_list/:filter', to: 'courses#show'

  # chatters named routes
  get '/chatter', to: 'chatters#index'
  post '/chatters', to: 'chatters#create'

  # bids named routes
  get '/bids', to: 'bids#index'

  # minings named routes
  get '/minings', to: 'minings#index'
end
