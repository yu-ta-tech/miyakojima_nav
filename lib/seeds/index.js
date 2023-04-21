const cities = require("./cities");

for (let i = 0; i < 50; i++) {
  const randomCityIndex = Math.floor(Math.random() * cities.length);
  const camp = new Campground({
    location: `${cities[randomCityIndex].prefecture}${cities[randomCityIndex].city}`
  })
}
