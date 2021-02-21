import axios from "axios";

const username: string = "wallpapers";
const password: string = "95NwNCVdsE7cM6GFOLUNY1o";

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
    "X-Sifter-Token": "7d215d4493cb0b190412bff1ddbd00cda7e63343",
    Authorization: generateAuth(),
  },
};

export const axiosInstance = axios.create({
  headers: axiosConfig.headers,
});
