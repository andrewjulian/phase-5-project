Rails.application.routes.draw do
  resources :classrooms
  resources :users
  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  post "/login", to: "sessions#create"
  post "/users", to: "users#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"

end
