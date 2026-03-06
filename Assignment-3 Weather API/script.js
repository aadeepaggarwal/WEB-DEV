//current weather for Delhi - Lat: 28.61, Long: 77.20
let url = 'https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.20&current_weather=true';

let weatherList = document.querySelector('.weatherList');
// on console.log(url.data) we get this, so extact curr weather part 
/*
{
    "latitude": 28.61,
    "longitude": 77.2,
    "generationtime_ms": 0.04,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 214.0,
    "current_weather": {
      "temperature": 24.5,
      "windspeed": 12.1,
      "winddirection": 90,
      "weathercode": 3,
      "is_day": 1,
      "time": "2026-03-07T02:00"
    }
  }
*/
function updateWeather(data) {
    // clear the current  text- yaha se inner list ka jo abhi loading aa raha tha woh hatega
    weatherList.innerText = '';

    //extract current weather object
    const { temperature, windspeed, weathercode, time } = data.current_weather;

    // create elements to show the data
    // we create a few lists to show different stats
    let stats = [
        `Temperature: ${temperature}°C`,
        `Wind Speed: ${windspeed} km/h`,
        `Time: ${time}`,
        
    ];

    for (let i = 0; i < stats.length; i++) {
    let li = document.createElement('li');
    li.innerText = stats[i]; 
    weatherList.appendChild(li);
}
}

// Fetch wala part
fetch(url)
    .then((res) => {
        // convert the raw data to JSON
        return res.json();
    })
    .then((data) => {
        
        console.log(data); // console mein print hoga
        updateWeather(data);
    })
    .catch((err) => {
        console.error("Error fetching weather:", err);
        weatherList.innerText = "error";
    });