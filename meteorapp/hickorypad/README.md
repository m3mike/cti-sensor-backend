Hickory
========

First shot with Meteor.

# Test Data

* Added initial data for testing (fixtures) to get some data in the application when you startup.

* To load the data:

1. Run Meteor app as usual (`meteor run` from within hickorypad directory.)
2. In another terminal window, run `meteor shell`.
3. From the Meteor shell, run `Fixtures.loadFixtures();`
4. You can then exit the Meteor shell by executing `.exit`.

NOTE: This is a one-time action you only need to do when you first checkout the code as this actually loads data into the Mongo database.
Unless noted code updates should not affect the data in the database.  If the data model changes the fixtures will be updated and
auto-reloaded.

NOTE 2: This will also start to form the basis of automated testing.