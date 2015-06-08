 class Local < ActiveRecord::Base

	
	def self.filter fields

		if fields 
			@locals = @locals.where( celiacous_food == true, vegan_food == true ) 
		else
			redirect_to root_path
		end
	end

	def self.search_by_criteria search
		search = search.downcase

		if search 
			str = "name like '%"+search+"%'"
			where(str)
		else
			find(:all)
		end
	end
end
