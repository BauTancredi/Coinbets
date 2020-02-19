import React from "react";
import Card from "../Card";
import "./styles.css";

import cards from "../../cards";
import ButtonRefresh from "../ButtonRefresh";

export default function CardContainer() {
  return (
    <div>
      <div className="container">
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              card={card.card}
              crypto={card.crypto}
              price={card.price}
              info={card.info}
              img={card.img}
            />
          );
        })}
      </div>
      <ButtonRefresh />
    </div>
  );
}
