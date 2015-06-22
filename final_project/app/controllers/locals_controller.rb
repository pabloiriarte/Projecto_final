
 class LocalsController < ApplicationController

	def home
		@locals = Local.all
	end

	def index
		if params[:category]
			@locals = Local.filter_by_category params[:category]
		else
			@locals = Local.all
		end
	end

	def show
		@local = Local.find(params[:id])
		@locals = Local.all
		respond_to do |format|
			format.html 
			format.json {render json: @local}
		end
	end

	def new
		@local = Local.new
	end

	def create
		@local = Local.new local_params

		if @local.save
			flash[:notice] = 'New local added successfully'
			redirect_to locals_path
		else
			flash[:alert] = 'Local not added'
			render 'new'
		end
	end

	def destroy
		local = Local.find params[:id]
		local.destroy
		redirect_to locals_path
	end

	def search
		@locals = Local.search_by_criteria params[:search]
		render 'home'
	end
	private
	def local_params
		params.require(:local).permit(:name, :type_of_food, :location, :latitude, :longitude, :celiacous_food, :vegan_food, :vegetarian_food, :img_url )
	end
end
