import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Epic Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem
              src="Images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Jungle"
              label="adventure"
              path="/services"
            />
            <Carditem
              src="Images/img-2.jpg"
              text="Travel through the Islands of Maldivs in a Personalized Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src="Images/img-3.jpg"
              text="The City of Light draws millions of visitors every year with its unforgettable ambiance. Of course, the divine cuisine and vast art collections deserve some of the credit as well."
              label="adventure"
              path="/services"
            />
            <Carditem
              src="Images/img-8.jpg"
              text="Venice, it's temples and palaces did seem like fabrics of enchantment piled to heaven."
              label="Luxury"
              path="/services"
            />
            <Carditem
              src="Images/img-10.jpg"
              text="Never measure the height of a mountain until you reach the top. Then you will see how low it was."
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
