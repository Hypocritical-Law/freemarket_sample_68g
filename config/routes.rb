Rails.application.routes.draw do
  root "items#index"

  devise_for :users, :controllers => {
    :registrations => 'users/registrations'
  }
  resources :users, only: :show
  devise_scope :user do
    get  'signup',    to: 'users/registrations#index'
    get  'addresses',  to: 'users/registrations#new_address'
    post  'addresses',  to: 'users/registrations#create_address'
    get  'logout',    to: 'users/sessions#logout'
  end
  resources :items, except: :show do
    collection do
      get 'category'
    end
  end
  # get 'get_category_children', defaults: { format: 'json' }
  # get 'get_category_grandchildren', defaults: { format: 'json' }
  resources :signups, only: [ :new, :create] do
    collection do
      
      get 'member'
      post 'address'
      post 'telephone'
      get 'login'
    end
  end
end
