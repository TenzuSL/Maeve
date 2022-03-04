$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/new.feature");
formatter.feature({
  "line": 1,
  "name": "maeve is the",
  "description": "",
  "id": "maeve-is-the",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "test this",
  "description": "",
  "id": "maeve-is-the;test-this",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "try this",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "do this",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "verify the result",
  "keyword": "Then "
});
formatter.match({
  "location": "maeve.try_this()"
});
formatter.result({
  "duration": 445823500,
  "status": "passed"
});
formatter.match({
  "location": "maeve.do_this()"
});
formatter.result({
  "duration": 199300,
  "status": "passed"
});
formatter.match({
  "location": "maeve.verify_the_result()"
});
formatter.result({
  "duration": 171100,
  "status": "passed"
});
});