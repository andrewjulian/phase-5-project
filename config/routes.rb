Rails.application.routes.draw do
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
end
