import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, img, name, quantity, price, shipping } = product;
  const icon = <FontAwesomeIcon icon={faTrashAlt} />;
  return (
    <div className="product-details">
      <div>
        <img width="91px" src={img} alt="" />
      </div>
      <div className="details-container">
        <div className="details">
          <p>{name}</p>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Shipping: ${shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="remove-item">
          <button onClick={() => handleRemoveItem(id)} className="delete-btn">
            {icon}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
