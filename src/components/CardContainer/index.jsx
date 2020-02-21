import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./styles.css";

import ButtonRefresh from "../ButtonRefresh";
import Loader from "../Loader";

export default function CardContainer() {
  var [data, setData] = useState([]);
  var [loading, setLoading] = useState(false);
  const symbols = ["EOS", "BCH", "DASH", "ZEC", "ETH", "QTUM", "BTC", "LTC"];

  useEffect(() => {
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function callApi() {
    try {
      setLoading((loading = true));

      await fetch("https://api.coincap.io/v2/rates")
        .then(res => res.json())
        .then(res => filterCrypto(res.data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading((loading = false));
    }
  }

  function filterCrypto(data) {
    setData(
      data.filter(coin => {
        return coin.type === "crypto" && symbols.includes(coin.symbol);
      })
    );
  }
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        <div className="container">
          {data.map((card, index) => {
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
        <ButtonRefresh handler={callApi} />
      </div>
    );
  }
}
