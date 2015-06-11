Rails.application.routes.draw do

  get '/' => 'locals#home', as: 'root'
  resources :locals
  post '/' => 'locals#search', as: 'locals_search'
  get '/locals/category/:category' => 'locals#filter' 

  #post '/' => 'locals#index'
end
