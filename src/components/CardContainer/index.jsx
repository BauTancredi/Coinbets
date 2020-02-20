import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./styles.css";

import ButtonRefresh from "../ButtonRefresh";

export default function CardContainer() {
  var [crypto, setData] = useState([]);
  const symbols = ["EOS", "BCH", "DASH", "ZEC", "ETH", "QTUM", "BTC", "LTC"];

  useEffect(() => {
    fetch("https://api.coincap.io/v2/rates")
      .then(res => res.json())
      .then(res => otraFuncion(res.data));
  }, []);

  function otraFuncion(data) {
    setData(
      data.filter(coin => {
        return coin.type === "crypto" && symbols.includes(coin.symbol);
      })
    );
  }

  return (
    <div>
      <div className="container">
        {crypto.map((card, index) => {
          return (
            <Card
              key={card.id}
              card={`card${index + 1}`}
              crypto={`${card.symbol}/USD`}
              price={parseFloat(card.rateUsd).toFixed(4)}
              info={card.id}
              img={`../../images/currency/${card.id}.svg`}
            />
          );
        })}
      </div>
      <ButtonRefresh />
    </div>
  );
}
