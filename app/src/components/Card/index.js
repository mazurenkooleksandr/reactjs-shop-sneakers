import React from "react";
import styles from "./Card.module.scss";

export default function Card({
  id,
  imageURL,
  price,
  name,
  onFavorite,
  onPlus,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ imageURL, price, name });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onFavorite({ id, imageURL, price, name });
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="unliked"
        />
      </div>
      <img width={133} height={112} src={imageURL} alt="sneakers" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          width={25}
          height={25}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}
