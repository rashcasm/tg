import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";

import { ConnectButton } from '@rainbow-me/rainbowkit';


const { getData } = require("./db/db");
const meds = getData();

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (med) => {
    const exist = cartItems.find((x) => x.id === med.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === med.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...med, quantity: 1 }]);
    }
  };

  const onRemove = (med) => {
    const exist = cartItems.find((x) => x.id === med.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== med.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === med.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = "Pay";
    tele.MainButton.show();
  };

  return (
    <>
      <h1 className="heading">Order Essential Healthcare Products</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className="cards__container">
        {meds.map((med) => {
          return (
            <Card med={med} key={med.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
      <ConnectButton label="Sign in"/>
    </>
  );
}

export default App;
