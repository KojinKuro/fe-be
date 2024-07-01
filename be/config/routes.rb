Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'api/v1/welcome', to: 'api/v1/welcome#show'

  get 'api/v1/messages', to: 'api/v1/messages#index'
end
