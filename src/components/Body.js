import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfResturants] = useState(resList);

    // useState return an array.
    // const arr = useState(resList);
    // const listOfRestaurants = arr[0];
    // const setListOfResturants = arr[1];

  return (
    <div className="body">
      <div className="filter">
        <button 
            className="filter-btn" 
            onClick={()=>{
                // Filter Logic here
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListOfResturants(filteredList);
            }}
        >
            Top rated Restaurants
            </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
