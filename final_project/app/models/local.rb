 class Local < ActiveRecord::Base

=begin	def self.filter_by_criteria filter

		@locals = Local.all

		if filter 
			@locals = @locals.where( :celiacous_food == true ) 
			redirect_to locals_path(@locals)
		elsif 
			@locals = @locals.where( :vegan_food == true )
			redirect_to locals_path(@locals)
		else
			redirect_to root_path
		end
	end
=end 

	def self.search_by_criteria search
		search = search.downcase

		if search 
			str = "name like '%"+search+"%'"
			where(str)
		else
			find(:all)
		end
	end

	def self.filter_by_category category

		case category
		when 'celiacous_food'
			return Local.where("celiacous_food = 't'")
		when 'vegan_food'
			return Local.where("vegan_food = 't'")
		end
	end



end
