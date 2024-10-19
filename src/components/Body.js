import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    // local state variable (scope inside the component)
    // ? declaring a list that catches the state variable returned by useState()
    // ? listRest list is not mutable, hence a second argument has to be passed 
    // by convention this second variable should be named set<name of list>
    // ? this variable setlistRest is used to update the list
    const [listRest, setlistRest] = useState(resList); // default values to listRest state variable are passed through useState()
return (
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredList = listRest.filter((res) => res.info.avgRating > 4.3);
                setlistRest(filteredList); // ? update listRest with filteredList
            }}>Top Restaurants</button>
        </div>
        <div className="search">
            search
        </div>
        <div className="res-container">
            {listRest.map(restaurant => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))}
        </div>
    </div>
);
};

export default Body;