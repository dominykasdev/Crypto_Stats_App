import React from "react";
import axios from "axios";

const apiKey = "d5f626fb-5aa8-4da3-be7d-b199b38089de";
const url =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=d5f626fb-5aa8-4da3-be7d-b199b38089de&symbol=BTC,ETH,NEO,ZRX,NULS,NANO,GAS,VRC&convert=USD";

export default axios.create({
  //baseURL: "https://pro-api.coinmarketcap.com",
  baseURL: "https://api.myjson.com"
  /*headers: {
    "X-CMC_PRO_API_KEY": apiKey
  },
  params: {
    //"X-CMC_PRO_API_KEY": apiKey,
    symbol: "BTC,ETH,NEO,ZRX,NULS,NANO,GAS,VRC",
    convert: "USD"
  }*/
});
