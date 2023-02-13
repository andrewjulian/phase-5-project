class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActiveStorage::Blob::Analyzable

  before_action :authorize
  
  private
   
  def authorize
    return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
  end

end