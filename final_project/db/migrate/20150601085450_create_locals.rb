class CreateLocals < ActiveRecord::Migration
  def change
    create_table :locals do |t|
    	t.string 	  :name
    	t.text	 	  :type_of_food
    	t.string 	  :location
    	t.boolean 	:celiacous_food, default: false
    	t.boolean 	:vegan_food, default: false
      t.boolean   :vegetarian_food, default: false
      t.float     :latitude
      t.float     :longitude
      t.string    :img_url


      t.timestamps null: false
    end
  end
end
