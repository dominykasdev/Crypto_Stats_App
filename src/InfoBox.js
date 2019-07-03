import React from "react";

const InfoBox = props => {
  const infoBoxClass =
    props.infoBoxClass !== undefined ? props.infoBoxClass : "";

  const rateColor = percentage => {
    let rateClass = "";
    if (percentage > 0) {
      rateClass = "positiveRate";
    } else if (percentage === 0) {
      rateClass = "noRate";
    } else {
      rateClass = "negativeRate";
    }
    return rateClass;
  };

  const roundRate = percentage => {
    percentage = percentage.toFixed(3);
    return percentage;
  };

  const roundPrice = price => {
    price = price.toFixed(3);
    return price;
  };

  return (
    <div
      id={props.infoBoxID}
      className={`infoBox ${infoBoxClass} ${props.displayToggle}`}
    >
      <div className="infoBoxHeader">{props.infoBoxName}</div>
      <div className="infoBoxPrice alt">${roundPrice(props.infoBoxPrice)}</div>
      <div className="infoBoxRates">
        <div className="infoBoxRateHeader">
          <div className="inlineBlock">1h</div>
          <div className="inlineBlock">24h</div>
          <div className="inlineBlock">7d</div>
        </div>
        <div className="infoBoxRateNumbers">
          <div className={`inlineBlock ${rateColor(props.infoBox1h)}`}>
            {roundRate(props.infoBox1h)}%
          </div>
          <div className={`inlineBlock ${rateColor(props.infoBox24h)}`}>
            {roundRate(props.infoBox24h)}%
          </div>
          <div className={`inlineBlock ${rateColor(props.infoBox7d)}`}>
            {roundRate(props.infoBox7d)}%
          </div>
        </div>
      </div>
      <div className="infoBoxAmount alt">{props.amount}</div>
      <div className="infoBoxAmountValue">{props.amountValue}</div>
    </div>
  );
};

export default InfoBox;
