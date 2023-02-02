Rails.application.routes.draw do
  
 
  
  resources :enrollments, only: [:index, :create] 
  resources :classrooms
  resources :users
  # route to test your configuration
  
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  delete "/enrollments/:room_id", to: "enrollments#remove"

  

end
