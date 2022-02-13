import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="d-flex justify-between aling-center p-40">
      <Link to="/">
        <div className="d-flex aling-center">
          <img src="/img/logo.png" width={50} heigth={40} alt="logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneackers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart}>
          <span className="mr-20">1205 руб.</span>
          <img className="mr-20 cu-p" src="./img/cart.svg" alt="cart" />
        </li>
        <li>
          <Link to="/favorites">
            <img className="mr-20 cu-p" src="./img/heart.svg" alt="heart" />
          </Link>
        </li>
        <li>
          <img className="mr-20 cu-p" src="./img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}
