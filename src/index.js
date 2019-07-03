import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import InfoBox from "./InfoBox";
import "./styles.css";
import axios from "./axios";
import storage from "./storage";
import UserSettings from "./userSettings";
import List from "./List";

const testURL = "https://api.myjson.com/bins/eigtb";

class App extends React.Component {
  state = {
    infoBoxes: "hidden",
    data: [],
    amount: 0,
    apiKey: "d5f626fb-5aa8-4da3-be7d-b199b38089de"
  };

  componentDidMount() {
    let storedCrypto = storage.getLocalStorage("storedCrypto");
    if (storedCrypto === false && this.state.data.length === 0) {
      this.getData();
    } else if (storedCrypto !== false) {
      console.log(JSON.parse(storedCrypto));
      this.setState({ data: JSON.parse(storedCrypto) });
    }
  }

  getData = async () => {
    localStorage.removeItem("storedCrypto");
    console.log("Removing Cookie");

    let storedCrypto = storage.getLocalStorage("storedCrypto");
    console.log(storedCrypto === false || this.state.data.length === 0);
    if (storedCrypto === false || this.state.data.length === 0) {
      console.log("Getting Data...");
      const cryptoData = await axios
        .get(
          /*"/v1/cryptocurrency/quotes/latest",{
        params: {
          "CMC_PRO_API_KEY": this.state.apiKey,
          symbol: "BTC,ETH,NEO,ZRX,NULS,NANO,GAS,VRC",
          convert: "USD"
        }})*/ "/bins/eigtb"
        )
        /*.then(response => {
          console.log(response.data);
        })*/
        .catch(error => console.log(error));

      let arr = [];
      for (var key in cryptoData.data.data) {
        if (cryptoData.data.data.hasOwnProperty(key)) {
          arr.push(cryptoData.data.data[key]);
        }
      }
      console.log(JSON.parse(JSON.stringify(arr)));
      this.setState({ data: arr, infoBoxes: "visible" });
      storage.setLocalStorage("storedCrypto", JSON.stringify(arr));
    }
  };

  renderInfoBoxes() {
    if (this.state.data.length !== 0) {
      const InfoBoxes = this.state.data.map(crypto => {
        return (
          <InfoBox
            displayToggle={this.state.infoBoxes}
            infoBoxName={crypto.name}
            infoBoxID={crypto.symbol}
            infoBoxPrice={crypto.quote.USD.price}
            infoBox1h={crypto.quote.USD.percent_change_1h}
            infoBox24h={crypto.quote.USD.percent_change_24h}
            infoBox7d={crypto.quote.USD.percent_change_7d}
            amount={this.state.amount}
            amountValue={this.state.amount * crypto.quote.USD.price}
          />
        );
      });
      return <div>{InfoBoxes}</div>;
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="App">
        <UserSettings />
        <List listClass="userCryptoList" storageKey="userCryptoData" />
        <Button
          buttonID=""
          click={this.getData}
          buttonText="Get Data"
          buttonClass=""
        />
        <div className="container">{this.renderInfoBoxes()}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
