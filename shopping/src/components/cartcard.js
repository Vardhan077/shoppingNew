import React from "react";
import { Trash2 } from 'lucide-react';

const CartCards = ({ item, handleRemove}) => {
  // Assuming item is an object with a property 'item' containing the array of items
  const ids = item.id
  const itemsArray = JSON.parse(item.item);
  return (
    <div className="card-container mt-20">
      {itemsArray.map((singleItem, index) => (
        <div key={index} className="flex justify-center flex-col items-center mx-20">
          <img src={singleItem.images[0]} className="rounded-xl" width={180} alt="" />
          <h3 className="mt-5 font-bold">{singleItem.title}</h3>
          <p className=" font-extrabold text-green-700">Price: {singleItem.price}</p>
          <div className="flex flex-row mt-2 text-md items-center text-red-600 "><button onClick={()=>handleRemove(ids)}>remove</button><Trash2 size={16}/></div>
          
        </div>
      ))}
    </div>
  );
};

export default CartCards;
