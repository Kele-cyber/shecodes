//challenge 1
let weather = {};
console.log(weather);
//challenge 2
weather = {
  temp: 26,
  humidity: 68,
};
console.log(weather);
//challenge 3
console.log(weather.temp);
console.log(weather.humidity);
//challenge 4
weather.windSpeed = 11;
console.log(weather.windSpeed);
//challenge 5
console.log(`windSpeed: ${weather["windSpeed"]} mph`);
console.log(`temp: ${weather["temp"]}°C`);
console.log(`humidity: ${weather["humidity"]}%`);
//challenge 6
let forecast = [
  { day: "Monday", temperature: 16 },
  {
    day: "Tuesday",
    temperature: 28,
  },
  {
    day: "Wednesday",
    temperature: 19,
  },
  {
    day: "Thurday",
    temperature: 29,
  },
  {
    day: "Friday",
    temperature: 23,
  },
];
console.log(forecast);
