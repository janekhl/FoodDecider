// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all possible foods
// ===============================================================================

var foods = require("../data/foods");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/food", function(req, res) {
    res.json(foods);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/food", function(req, res) {
    // Note the code here. Our "server" will respond to a user"s survey result
    // Then compare those results against every user in the database.
    // It will then calculate the difference between each of the numbers and the user"s numbers.
    // It will then choose the user with the least differences as the "best food match."
    // In the case of multiple users with the same result it will choose the first match.
    // After the test, it will push the user to the database.

    // We will use this object to hold the "best match". We will constantly update it as we
    // loop through all of the options
    var bestFood = {
      name: "",
      photo: "",
      foodDifference: Infinity
    };

    // Here we take the result of the user"s survey POST and parse it.
    var userData = req.body;
    var userScores = userData.scores;

    // This variable will calculate the difference between the user"s scores and the scores of
    // each user in the database
    var totalDifference;

    // Here we loop through all the food possibilities in the database.
    for (var i = 0; i < foods.length; i++) {
      var currentFood= foods[i];
      totalDifference = 0;

      console.log(currentFood.name);

      // We then loop through all the scores of each food
      for (var j = 0; j < currentFood.scores.length; j++) {
        var currentFoodScore = currentFood.scores[j];
        var currentUserScore = userScores[j];

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFoodScore));
      }

      // If the sum of differences is less then the differences of the current "best Food"
      if (totalDifference <= bestFood.foodDifference) {
        // Reset the bestFood to be the new food.
        bestFood.name = currentFood.name;
        bestFood.photo = currentFood.photo;
        bestFood.foodDifference = totalDifference;
      }
    }

    // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
    // the database will always return that the user is the user's best food).
    foods.push(userData);

    // Return a JSON with the user's bestFood. This will be used by the HTML in the next page
    res.json(bestFood);
    console.log(bestFood);
  });
};
