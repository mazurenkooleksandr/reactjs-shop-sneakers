import React from "react";
import Card from "../components/Card";

export default function Home({
  items,
  searchValue,
  setSearchValue,
  onAddToCart,
  onAddToFavorite,
  onChangeSearchInput,
}) {
  return (
    <>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear cu-p"
                src="/img/btn-remove.svg"
                alt="clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск ... "
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((element) =>
              element.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((element, index) => (
              <Card
                key={index}
                onFavorite={(element) => onAddToFavorite(element)}
                onPlus={(element) => onAddToCart(element)}
                {...element}
              />
            ))}
        </div>
      </div>
    </>
  );
}
