import axios from "axios";

const API_KEY = "5e3dfffb629dbaabd830dd48";
const BASE_URL = "https://v6.exchangerate-api.com/v6";

const API = axios.create({
    baseURL: `${BASE_URL}/${API_KEY}`
});

export const Currencyrate = (fromCurrency, toCurrency, amount) => {
    return API.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};