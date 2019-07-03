//import React from "react";

export default {
  //class storage extends React.Component {
  getLocalStorage(dataKey) {
    const checkData = localStorage.hasOwnProperty(dataKey);

    if (checkData === true) {
      const dataItem = localStorage.getItem(dataKey);
      return dataItem;
    } else {
      return false;
    }
  },
  setLocalStorage(key, data) {
    localStorage.setItem(key, data);
  }
  //}
};
