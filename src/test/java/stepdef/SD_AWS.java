package stepdef;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SD_AWS {
	
	public WebDriver driver;
	
	@Given("^The user is in the login page$")
    public void the_user_is_in_the_login_page() throws Throwable {
     
		System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver");
//		System.setProperty("webdriver.chrome.driver", "C:\\Automation\\Drivers\\chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("headless");
		driver = new ChromeDriver(options);
		driver.get("https://www.screener.in/login/?");
		driver.manage().window().maximize();
		Thread.sleep(1000);		
    }

    @When("^The user enters the invalid credentials$")
    public void the_user_enters_the_invalid_credentials() throws Throwable {
     
    	driver.findElement(By.id("id_username")).sendKeys("Abc")	;
		driver.findElement(By.id("id_password")).sendKeys("Devil@123")	;
		driver.findElement(By.className("icon-user")).click();
		Thread.sleep(1000);
		
    }

    @Then("^The user should not be signed on$")
    public void the_user_should_not_be_signed_on() throws Throwable {
    	
    	String ActualText = driver.findElement(By.xpath("//ul[@class='errorlist nonfield']")).getText();
    	String ExpectedText ="Please enter a correct email and password. Note that both fields may be case-sensitive.";
    	Assert.assertEquals(ActualText , ExpectedText );
    	Thread.sleep(1000);
		driver.quit();
		
    }

}
