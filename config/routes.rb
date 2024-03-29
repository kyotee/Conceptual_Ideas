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
  get '/courses_list/:filter/:sort/:level', to: 'courses#show'
  post '/courses', to: 'courses#create'
  delete '/courses_delete', to: 'courses#destroy'

  # chatters named routes
  get '/chatter', to: 'chatters#index'
  post '/chatters', to: 'chatters#create'

  # minings named routes
  get '/minings', to: 'minings#index'
  get '/minings/:dataset', to: 'minings#show'
end
