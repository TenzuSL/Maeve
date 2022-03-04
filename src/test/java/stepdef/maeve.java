package stepdef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class maeve {
	
	  @Given("^try this$")
	    public void try_this() throws Throwable {
		  
		  System.out.println("given");
	        
	    }

	    @When("^do this$")
	    public void do_this() throws Throwable {
	    	
	    	System.out.println("when");
	        
	    }

	    @Then("^verify the result$")
	    public void verify_the_result() throws Throwable {
	    	
	    	System.out.println("then");
	        
	    }

}
