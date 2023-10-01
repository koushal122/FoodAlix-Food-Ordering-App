import "./shimmerCard.css";

const Shimmer=()=>{
   return (
    <div className="restaurant-list">
        {
            Array(20).fill("").map((e)=>{ return <div className="shimmer-restaurant" />})
        }
    </div>
   )
}

export default Shimmer