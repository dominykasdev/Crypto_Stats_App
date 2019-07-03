import React from "react";
import Storage from "./storage";

// class="userCryptoList"

const listItem = props => {
  return (
    <li className={`listItem ${this.props.listItemClass}`}>
      {this.props.text}
    </li>
  );
};

class List extends React.Component {
  state = { visible: "hidden", storageItems: [] };

  componentDidMount() {
    this.checkStorage();
  }

  checkStorage() {
    const storage = Storage.getLocalStorage(this.props.storageKey);
    console.log(JSON.parse(storage));
    if (storage !== false) {
      this.setState({ visible: "visible", storageItems: JSON.parse(storage) });
      return true;
    } else {
      return false;
    }
  }

  renderList() {
    if (this.state.visible === "visible") {
      const obj = this.state.storageItems;
      console.log(obj);
      const list = this.state.storageItems.map(item => {
        console.log(item.name);
        return <listItem listItemClass={item.name} text={item.name} />;
      });
    }
  }

  render() {
    return (
      <ul className={`list ${(this.props.listClass, this.state.visible)}`}>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
