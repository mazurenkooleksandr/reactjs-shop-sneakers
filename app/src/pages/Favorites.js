import React from "react";
import Card from "../components/Card";

export default function Favorites({ items, onAddToFavorite }) {
  return (
    <>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h2>Мои закладки</h2>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((element, index) => (
            <Card
              key={index}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...element}
            />
          ))}
        </div>
      </div>
    </>
  );
}
