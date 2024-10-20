import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
    // local state variable (scope inside the component)
    // ? declaring a list that catches the state variable returned by useState()
    // ? listRest list is not mutable, hence a second argument has to be passed 
    // by convention this second variable should be named set<name of list>
    // ? this variable setlistRest is used to update the list
    const [listRest, setlistRest] = useState([]); // default values to listRest state variable are passed through useState()

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        setlistRest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    };
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