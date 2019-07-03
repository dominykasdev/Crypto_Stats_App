import React from "react";
import Storage from "./storage";

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userData: [], crypto: "", value: "" };
    this.handleCryptoChange = this.handleCryptoChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCryptoChange(event) {
    this.setState({ crypto: event.target.value });
  }

  handleAmountChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.crypto !== "" && this.state.value !== "") {
      const crypto = this.state.crypto;
      const userDataObj = { name: crypto, value: this.state.value };
      //userDataObj[crypto] = this.state.value;

      this.setState(state => {
        const userData = state.userData.concat(userDataObj);
        console.log(userData);
        Storage.setLocalStorage("userCryptoData", JSON.stringify(userData));
        return {
          userData,
          value: ""
        };
      });
    } else {
      console.log("No currency or value submitted");
    }
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <datalist id="cryptoList">
          <option value="BTC" value2="Bitcoin">
            Bitcoin
          </option>
          <option value="BNB">Binance Coin</option>
          <option value="ETH">Ethereum</option>
          <option value="LTC">Litecoin</option>
          <option value="XRP">XRP</option>
          <option value="XLM">Stellar</option>
          <option value="XMR">Monero</option>
          <option value="TRX">TRON</option>
          <option value="MIOTA">IOTA</option>
          <option value="ADA">Cardano</option>
          <option value="USDT">Tether</option>
          <option value="DASH">Dash</option>
          <option value="NEO">Neo</option>
          <option value="GAS">Gas</option>
          <option value="NANO">Nano</option>
          <option value="NULS">NUL</option>
          <option value="VRC">VeriCoin</option>
          <option value="ZRX">0x</option>
        </datalist>
        <input
          list="cryptoList"
          value={this.state.crypto}
          onChange={this.handleCryptoChange}
        />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleAmountChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UserSettings;
