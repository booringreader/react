import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
    const{resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) {return <Shimmer />;}

    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"); 
    console.log(categories)
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="text-lg font-semibold">{cuisines.join(", ")}</p>
            <h3>{avgRating} 🌟</h3>
            {categories.map((category) => <MenuCategory data={category?.card?.card}/>)}
        </div>
    )
}

export default RestaurantMenu;