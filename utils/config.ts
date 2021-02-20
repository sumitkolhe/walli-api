import axios from "axios";

const axiosConfig = {
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json, text/plain, */*",
    "Cache-Control": "no-cache",
    "User-Agent": "okhttp/3.12.1",
    "X-Sifter-Token": "7d215d4493cb0b190412bff1ddbd00cda7e63343",
    Authorization: "Basic d2FsbHBhcGVyczo5NU53TkNWZHNFN2NNNkdGT0xVTlkxbw==",
  },
};

export const axiosInstance = axios.create({
  headers: axiosConfig.headers,
});
