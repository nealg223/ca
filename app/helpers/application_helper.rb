module ApplicationHelper
  
  # Return a title on a per-page basis
  def title
    base_title = "Code Academy"
  end
  
  def tweet
    @tweet = Twitter::Client.new.user('codeacademy').status.text rescue ""
  end
<<<<<<< HEAD
  
  def sponsors
    @sponsors = [
     {:name => "new_world_ventures", :description => "The leading Venture Capital Firm in the Midwest", :url => "http://www.newworldvc.com"},
     {:name => "Obtiva", :description => "Chicago's top Ruby on Rails Software Consultancy", :url => "http://obtiva.com"}
    ]
  end
=======
>>>>>>> 373fab6a703446922259cce2900ab30e6896317c
end
