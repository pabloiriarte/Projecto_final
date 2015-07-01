Rails.application.routes.draw do

  get '/' => 'locals#home', as: 'root'
  get '/contact' => 'contact#index'
  resources :locals
  post '/' => 'locals#search', as: 'locals_search'
  get '/locals/category/:category' => 'locals#index' 

  #post '/' => 'locals#index'
end
