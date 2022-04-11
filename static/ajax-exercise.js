'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch('/fortune')
    .then (response => response.text())
    .then (serverData => {
      document.querySelector('#fortune-text').innerHTML = serverData;
    });
  }

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(`${url}?zipcode=${zipcode}`)
    .then(response => response.json())
    .then(jsonData => {
      document.querySelector('#weather-info').innerHTML = jsonData.forecast;
    });
  }

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  const formInputs = {
    melon_type : document.querySelector('#melon-type-field').value,
    qty : document.querySelector('#qty-field').value
  };
  const url = '/order-melons.json';

  fetch('/order-melons.json', {
    method : 'POST',
    body : JSON.stringify(formInputs),
    headers : {
      'Content-type' : 'application/json'
    },
  })
  .then((response) => response.json())
  .then(responseJson => {
    document.querySelector('#order-status').innerHTML = responseJson.msg;
  });
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
