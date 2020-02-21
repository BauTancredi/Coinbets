import React, { useEffect, useState } from "react";

import Stock from "../Stock";
import "./styles.css";
import ButtonRefresh from "../ButtonRefresh";
import Loader from "../Loader";

export default function StockContainer() {
  var [stocks, setStocks] = useState([]);
  var [loading, setLoading] = useState(false);

  useEffect(() => {
    callApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function callApi() {
    try {
      setLoading((loading = true));
      await fetch(
        "https://api.worldtradingdata.com/api/v1/stock?symbol=BRK.A,SNAP,TWTR,BABA,JPM&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM"
      )
        .then(res => res.json())
        .then(data => setStocks(stocks.concat(data.data)));
      await fetch(
        "https://api.worldtradingdata.com/api/v1/stock?symbol=JNJ,V,WMT,XOM,BAC&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM"
      )
        .then(res => res.json())
        .then(data => setStocks(a => a.concat(data.data)));
      await fetch(
        "https://api.worldtradingdata.com/api/v1/stock?symbol=T,DIS,KO,TM,PFE&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM"
      )
        .then(res => res.json())
        .then(data => setStocks(a => a.concat(data.data)));
      await fetch(
        "https://api.worldtradingdata.com/api/v1/stock?symbol=BA,HSBC,MCD,NKE,PM&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM"
      )
        .then(res => res.json())
        .then(data => setStocks(a => a.concat(data.data)));
      await fetch(
        "https://api.worldtradingdata.com/api/v1/stock?symbol=ACN,IBM,SNE,UL,CVX&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM"
      )
        .then(res => res.json())
        .then(data => setStocks(a => a.concat(data.data)));
      await fetch(
        "https://api.worldtradingdata.com/api/v1/stock?symbol=VZ,C&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM"
      )
        .then(res => res.json())
        .then(data => setStocks(a => a.concat(data.data)));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading((loading = false));
    }
  }

  async function refresh() {
    try {
      setStocks((stocks = []));
      setLoading((loading = true));
      await fetch(
        "https://api.worldtradingdata.com/api/v1/stock?symbol=BRK.A,SNAP,TWTR,BABA,JPM&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM"
      )
        .then(res => res.json())
        .then(data => setStocks(stocks.concat(data.data)));
      await fetch(
        "https://api.worldtradingdata.com/api/v1/stock?symbol=JNJ,V,WMT,XOM,BAC&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM"
      )
        .then(res => res.json())
        .then(data => setStocks(a => a.concat(data.data)));
      await fetch(
        "https://api.worldtradingdata.com/api/v1/stock?symbol=T,DIS,KO,TM,PFE&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM"
      )
        .then(res => res.json())
        .then(data => setStocks(a => a.concat(data.data)));
      await fetch(
        "https://api.worldtradingdata.com/api/v1/stock?symbol=BA,HSBC,MCD,NIKE,PM&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM"
      )
        .then(res => res.json())
        .then(data => setStocks(a => a.concat(data.data)));
      await fetch(
        "https://api.worldtradingdata.com/api/v1/stock?symbol=ACN,IBM,SNE,UL,CVX&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM"
      )
        .then(res => res.json())
        .then(data => setStocks(a => a.concat(data.data)));
      await fetch(
        "https://api.worldtradingdata.com/api/v1/stock?symbol=VZ,C&api_token=zb1texuUbXgiwcbjsrggcIQlEOl2Pu9V1SnrKpAGB7CYUhHutl9Kap2wmkQM"
      )
        .then(res => res.json())
        .then(data => setStocks(a => a.concat(data.data)));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading((loading = false));
    }
  }

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        <div className="stock-container">
          {stocks.map((stock, index) => {
            return (
              <Stock
                key={index}
                name={stock.name}
                price={stock.price}
                stock={`stock${Math.floor(Math.random() * 8) + 1}`}
              />
            );
          })}
        </div>
        <ButtonRefresh handler={refresh} />
      </div>
    );
  }
}
