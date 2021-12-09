import React from "react";
import "./collection-item.css";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item '>
    <div
      className='collection-item  image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-item collection-footer '>
      <span className='collection-item collection-footer name'>{name}</span>
      <span className='collection-item collection-footer price'>{price}</span>
    </div>
  </div>
);
export default CollectionItem;