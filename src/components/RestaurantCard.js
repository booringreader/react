import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;

    // TODO const { name, cuisine, rating, time } = restData?.data;
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.info;  // ? optional chaining
    const stylecard = { // ? js object
        backgroundColor: "rgb(183, 172, 183)"
    }
    
    return (
        <div className="res-card" style={stylecard}>
            <div className="res-logo-container">
                <img alt="res-logo" className="res-logo" src={ CDN_URL + cloudinaryImageId} />
            </div>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h6>{avgRating}</h6>
            <h6>{deliveryTime}</h6>
            <h6>{costForTwo}</h6>
        </div>
    )
}

export default RestaurantCard;