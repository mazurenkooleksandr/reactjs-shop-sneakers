import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  React.useEffect(() => {
    fetch("https://6208076922c9e90017d32fec.mockapi.io/items")
      .then((res) => res.json())
      .then((item) => setItems(item));
  }, []);
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск ... " />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((element) => (
            <Card
              name={element.name}
              price={element.price}
              imageURL={element.imageURL}
              onFavorite={() => console.log("Добавили закладки")}
              onPlus={(element) => onAddToCart(element)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
