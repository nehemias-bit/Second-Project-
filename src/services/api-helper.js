import axios from 'axios';
const token = '7Quim8npCMtOQ8wtRSB0x6DM6HFnmO9qs2E5yhfazSQmgN9ei4zZ0i90jf7H30S4MxYTlaJZ8PwzQHLN1oD8CePyj9FuIuIh4wy3aVUsedgzrYG-63H6s1q15vWoXXYx';

const currencyLayerApiKey = '6cd397ebeac24832da35deb7dc69f5c0';

export const currencyEx = async function (countryCode) {
  let response = await axios.get(`http://apilayer.net/api/live?access_key=${currencyLayerApiKey}&currencies=${countryCode}&format=1`);
  return response;
}

export const currencyList = async function () {
  let response = await axios.get(`http://apilayer.net/api/list? access_key=${currencyLayerApiKey}`);
  return response;
}

export const onLoadOptions = async function () {
  let response = await axios.get(`https://freegeoip.app/json/`);
  return response;
}

const options = {
  headers: {
    Authorization: `Bearer ${token}`
  }
}

export const getYelp = async function (restaurant, location, price) {
  
  let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${restaurant}&location=${location}&price=${price}`, options)
  console.log(typeof response)
  return response;
}

export const getYelpOnLoad = async function (city) {
  let response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${city}`, options)
  return response;
}
