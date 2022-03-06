$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/new.feature");
formatter.feature({
  "line": 1,
  "name": "Integrate with AWS",
  "description": "",
  "id": "integrate-with-aws",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Work this in a jenkins in AWS",
  "description": "",
  "id": "integrate-with-aws;work-this-in-a-jenkins-in-aws",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "The user is in the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user enters the invalid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user should not be signed on",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_AWS.the_user_is_in_the_login_page()"
});
formatter.result({
  "duration": 16994928500,
  "status": "passed"
});
formatter.match({
  "location": "SD_AWS.the_user_enters_the_invalid_credentials()"
});
formatter.result({
  "duration": 1709026700,
  "status": "passed"
});
formatter.match({
  "location": "SD_AWS.the_user_should_not_be_signed_on()"
});
formatter.result({
  "duration": 1741905300,
  "status": "passed"
});
});