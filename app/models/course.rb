class Course < ApplicationRecord
	def self.search(search)
	    if search != nil
	    	Course.where(color_number: 0)
	        # find(:all, :conditions => ['zip LIKE ?', "%#{search}%"])
	    else
	        Course.all
	    end
	end
end
