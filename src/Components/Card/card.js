import rating from "../Images/rating-icon.png";
import "./card.css"
import { useContext } from "react";
import UserContext from "../Utils/Contexts";

const Card=(props) =>{
    let image__base_url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    let image_url=image__base_url+props.info.cloudinaryImageId;
    let cuisines=props.info.cuisines.toString();
    const {user}=useContext(UserContext);
    if(cuisines.length>25){
       cuisines=cuisines.slice(0,25)+"...";
    }
    let rest_name=props.info.name;
    if(rest_name.length>22){
        rest_name=rest_name.slice(0,22)+"...";
     }
    return (
       <div className="card">
        <img className="dish-image" src={image_url} alt="restaurant" />
        <div className="dish-details">
            <h4 className="restaurant-name">{rest_name}</h4>
            <div className="rating">
                <img className="rating-icon" src={rating} alt="rating-icon"/>
                <p className="m-0">{props.info.avgRatingString}</p>
            </div>
            <p className="cuissins">{cuisines}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
       </div>
    )
}

export default Card