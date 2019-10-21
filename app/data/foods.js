// ===============================================================================
// DATA
// Below data will hold all of the possible foods..
// ===============================================================================


var foods = [
  {
    name: "Italian",
    photo: "https://www.phillymag.com/wp-content/uploads/sites/3/2018/10/best-italian-philadelphia-little-nonnas.jpg",
    scores: [
      "1",
      "1",
      "3",
      "2",
      "2",
      "1",
      "2"
    ]
  },
  {
    name: "Sushi",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUzVXkOT7w-Un_dwQDqKlVI14QHN7mwrA6MUMpFBtPfgsoU070",
    scores: [
      "2",
      "3",
      "2",
      "3",
      "1",
      "3",
      "3"
    ]
  },
  {
    name: "Pizza",
    photo: "https://www.simplyrecipes.com/wp-content/uploads/2019/09/easy-pepperoni-pizza-lead-4.jpg",
    scores: [
      "1",
      "1",
      "3",
      "1",
      "1",
      "1",
      "2"
    ]
  },
  {
    name: "Salad",
    photo: "https://natashaskitchen.com/wp-content/uploads/2019/02/Greek-Salad.jpg",
    scores: [
      "2",
      "1",
      "3",
      "2",
      "3",
      "2",
      "1"
    ]
  },
  {
    name: "Chinese",
    photo: "https://www.thespruceeats.com/thmb/cVIMAwzKdR_GY6bDvivKPkQUyr8=/2733x2733/smart/filters:no_upscale()/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg",
    scores: [
      "1",
      "3",
      "1",
      "1",
      "1",
      "1",
      "2"
    ]
  },
  {
    name: "Mexican",
    photo: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/best_and_worst_mexican_dishes_slideshow/493ss_thinkstock_rf_variety_of_mexican_foods.jpg",
    scores: [
      "1",
      "2",
      "1",
      "1",
      "3",
      "3",
      "2"
    ]
  },
  {
    name: "Thai",
    photo: "http://www.hvmag.com/Where-to-Get-the-Best-Thai-Food-in-the-Hudson-Valley/Fotolia_199459052_Subscription_Monthly_M.jpg",
    scores: [
      "1",
      "2",
      "1",
      "1",
      "1",
      "3",
      "2"
    ]
  }

];

// Here we export the array. This makes it accessible to other files using require.
module.exports = foods;
