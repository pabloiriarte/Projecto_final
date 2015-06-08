
 class LocalsController < ApplicationController

	def home
		@locals = Local.all
	end

	def index
		@locals = Local.all
		
	end

	def show
		@local = Local.find(params[:id])
		@locals = Local.all
		respond_to do |format|
			format.html 
			format.json {render json: @local}
		end
	end

	def search
		@locals = Local.search_by_criteria params[:search]
		render 'home'
	end
end
