import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;

    // TODO const { name, cuisine, rating, time } = restData?.data;
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.info;  // ? optional chaining
    const stylecard = { // ? js object
        backgroundColor: "rgb(183, 172, 183)"
    }
    
    return (
        <div className="m-4 p-4 w-[250px] rounded-md bg-gray-200 hover:bg-gray-300">
            <div className="resImage-container rounded-lg overflow-hidden">
                <img alt="resImage" className="res-logo" src={ CDN_URL + cloudinaryImageId} />
            </div>
            <h3 className="font-bold">{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h6>{avgRating}</h6>
            <h6>{deliveryTime}</h6>
            <h6>{costForTwo}</h6>
        </div>
    )
}

export default RestaurantCard;