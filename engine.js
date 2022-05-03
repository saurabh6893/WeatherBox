let weather = {
  apiKey: '4d43cb74396ed340fa665ff0ea1a1726',
  fetchWeather: function (city) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&units=metric&appid=' +
        this.apiKey
    )
      .then((response) => response.json())
      .then((Data) => this.displayWeather(Data))
  },

  displayWeather: function (data) {
    const { name } = data
    const { icon, description } = data.weather[0]

    const { temp, humidity } = data.main
    const { speed } = data.wind

    // console.log(name, icon, description, temp, humidity, speed)
    document.querySelector('.city').innerText = 'Weather in ' + name
    document.querySelector('.icon').src =
      'https://openweathermap.org/img/wn/' + icon + '.png'
    document.querySelector('.description').innerText = description
    document.querySelector('.humidity').innerText =
      'Humidity: ' + humidity + '%'
    document.querySelector('.temp').innerText = temp + ' °C'
    document.querySelector('.wind').innerText = 'WindSpeed: ' + speed + ' km/hr'
    document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${name}")`
  },

  search: function () {
    this.fetchWeather(document.querySelector('.searchBar').value)
  },
}
document.querySelector('.search button').addEventListener('click', function () {
  weather.search()
})
document
  .querySelector('.searchBar')
  .addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      document.querySelector('.search button').click()
    }
  })
