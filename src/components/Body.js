import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"

const Body = () => {
    // ? state variable declaration
    const [listRest, setlistRest] = useState([]); // default values to listRest state variable are passed through useState()
    const [searchText, setsearchText] = useState([]);
    const [searchRest, setsearchRest] = useState([]);

    // ? fetching data from API 
    useEffect(() => {
        fetchData();
    }, []);

    // ? function declaring method to fetch data from API
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        
        setlistRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) // optional chaining
        setsearchRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    // ? contents of the body component
    return listRest.length === 0 ? (<Shimmer />) : (
    <div className="body">
        <div className="filter">
            
            <div className="search">
                {/* ? search bar */}
                <input type="text" className="search-box" value={searchText} onChange={(e) =>
                    setsearchText(e.target.value)}></input>

                {/* search bar button */}
                <button onClick={() => {
                    const filteredRes = listRest.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setsearchRest(filteredRes);
                }}>Search
                </button>

            </div>
                
                {/*"top restaurant" filter button */}
            <button className="filter-btn" onClick={() => {
                const filteredList = listRest.filter((res) => res.info.avgRating > 4.3);
                setsearchRest(filteredList); // ? update listRest with filteredList
            }}>Top Restaurants
            </button>

        </div>
        
        <div className="res-container">
            {searchRest.map(restaurant => (
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>))}
        </div>
    </div >
    );
};

export default Body;