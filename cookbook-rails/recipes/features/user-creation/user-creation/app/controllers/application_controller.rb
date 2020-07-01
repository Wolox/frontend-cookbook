# frozen_string_literal: true

class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    keys = %i[name birth_date address city state country email_subscription
              number_of_languages]
    devise_parameter_sanitizer.permit(:sign_up, keys: keys)
  end
end
