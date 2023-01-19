Rails.application.routes.draw do
  resources :enrollments
  resources :classrooms
  resources :users
  # route to test your configuration
  
  post "/login", to: "sessions#create"
  post "/users", to: "users#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"

end
