class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  before_action :authorize

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end
  
  private
   
  def authorize
    return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
  end

end