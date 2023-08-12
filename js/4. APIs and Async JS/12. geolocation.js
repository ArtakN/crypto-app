// geolocation

// we can get our position if the browser has permission get our location
navigator.geolocation.getCurrentPosition(position => {
   console.log(position)
})
/* we get this
   coords: GeolocationCoordinates
      coords: GeolocationCoordinates
         accuracy: 20
         altitude: null
         altitudeAccuracy: null
         heading: null
         latitude: 40.5269232       // широта
         longitude: -111.916174     // долгота
         speed: null
         __proto__: GeolocationCoordinates
   timestamp: 1623170827394
*/

/**
 * Challenge: Get the user's current weather for their area and 
 * log it to the console
 * 
 * BaseURL: https://apis.scrimba.com/openweathermap/data/2.5/weather
 * Queries to include: 
 *     - lat (latitude)
 *     - lon (longitude)
 *     - units (imperial or metric)
 */
navigator.geolocation.getCurrentPosition(position => {
   fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
      .then(res => {
         if (!res.ok) {
            throw Error("Weather data not available")
         }
         return res.json()
      })
      .then(data => {
         console.log(data)
         /* -> {coord: {lon: -111.9162, lat: 40.5269}, weather: [{id: 802, main: "Clouds", description: 
               "scattered clouds", icon: "03d"}], base: "stations", main: {temp: 80.67, feels_like: 79,
               temp_min: 75.2, temp_max: 89.17, pressure: 1009, humidity: 20}, visibility: 10000, wind: 
               {speed: 10, deg: 195, gust: 18.01}, clouds: {all: 40}, dt: 1623173692, sys: {type: 2, id: 
               2003861, country: "US", sunrise: 1623153431, sunset: 1623207400}, timezone: -21600, id: 
               5780557, name: "Riverton", cod: 200}   */

         // render wheather icon, tempreture and city on the page
         const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
         document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p>${Math.round(data.main.temp)}º</p>
                <p>${data.name}</p>
            `
      })
      .catch(err => console.error(err))
});

// --------------------------------------------------------------------------------

// we can do the same with Promise
navigator.geolocation.getCurrentPosition()
   .then()

// and with Async/Await
async function getLocation() {
   const position = await navigator.geolocation.getCurrentPosition()
   console.log(position)
}