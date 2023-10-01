import React from "react";
import dish1 from "../Images/dish.png";
import dish2 from "../Images/dish2.png";
import dish3 from "../Images/dish3.png";
import "./restaurantMenu.css"
import rating from "../Images/rating-icon.png";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Utils/cartSlice";

const RestaurantMenu=()=>{
    const {id}=useParams();
    const menu=["Chicken Biryani","Veg Biryani", "Roti","Rice","Butter Paneer Masala"];
    const dispatch=useDispatch();
    const handleAdd =(item)=>{
        console.log(item);
       dispatch(addItem(item));
    }

    const handleRemove =(item)=>{
       dispatch(removeItem());
    }

   return (
      <div className="restaurant-menu">
        <div className="images-menu">
           <img src={dish1} className="dish-image-restaurant-details" alt="dish" />
           <img src={dish2}  className="dish-image-restaurant-details" alt="dish2" />
           <img src={dish3}  className="dish-image-restaurant-details" alt="dish3"/>
        </div>
        <div className="nameAndRating">
           <h3 className=""> New Inn Restaurant {id} </h3>
           <div className="rating">
                <img className="rating-icon" src={rating} alt="rating-icon"/>
                <p className="m-0">4.2</p>
            </div>
            <h4>200$ for Two</h4>
        </div>
        <div className="cuisines">
           <p>South Indian, Chinese, Fast Food, Street Food, Beverages, Shake, Sichuan</p>
        </div>
        <div className="MenuItem">
            <h4>Menu</h4>
            <ul>
                {
                    menu.map((m)=>{
                        return(
                        <div className="restaurant-menu-items">
                        <li>{m}</li>
                        <button className="addToCartBtn" onClick={()=>{handleAdd(m)}}>Add to Cart</button>
                        <button className="removeFromCartButton" onClick={()=>{handleRemove(m)}}>Remove from Cart</button>
                        </div>
                        )
                    })
                }
            </ul>
        </div>
      </div>
   )
}

export default RestaurantMenu