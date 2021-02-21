import axios from "axios";

// Constants
const username: string = "wallpapers";
const password: string = "95NwNCVdsE7cM6GFOLUNY1o";
const sifter_token: string = "7d215d4493cb0b190412bff1ddbd00cda7e63343";
const algolia_api_key: string = "ef3441f28fb15cf1709e95c1089a0dfc";
const algolia_id: string = "9GLX4IH8TI";
//const walli_host: string = "ku.shanga.co";
//const algolia_host: string = "9glx4ih8ti-dsn.algolia.net";

const generateAuth = () => {
  const creds = Buffer.from(`${username}:${password}`).toString("base64");
  return `Basic\xa0${creds}`;
};

const axiosConfig = {
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json, text/plain, */*",
    "Cache-Control": "no-cache",
    "User-Agent": "okhttp/3.12.1",
    "X-Sifter-Token": sifter_token,
    Authorization: generateAuth(),
    "X-Algolia-API-Key": algolia_api_key,
    "X-Algolia-Application-Id": algolia_id,
  },
};

export const axiosInstance = axios.create({
  headers: axiosConfig.headers,
});
