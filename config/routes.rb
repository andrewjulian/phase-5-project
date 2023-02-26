Rails.application.routes.draw do

  mount ActionCable.server => "/cable"
  
  resources :messages
  resources :enrollments, only: [:index, :create] 
  resources :classrooms, only: [:index, :create, :show] 
  resources :users
  
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  delete "/enrollments/:room_id", to: "enrollments#remove"
  delete "/classrooms/:deletedClassId", to: "classrooms#remove"

  get "/classroom/messages/:classroomId", to: "messages#classroommessages"
  

end
