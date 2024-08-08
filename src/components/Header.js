import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-gradient-to-r from-orange-400 to-green-400 shadow-xl px-4 py-4 flex justify-between items-center">
      {/* Logo and App Name */}
      <div className="flex items-center">
        <div className="logo-container">
          <img className="h-16 w-16 rounded-full" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="ml-4">
          <h1 className="text-white text-xl font-bold">FoodKart</h1>
          <p className="text-white text-sm font-semibold">
            Delivering happiness!
          </p>
        </div>
      </div>

      {/* Navigation */}
      <ul className="flex space-x-6 items-center">
        <li className="text-white font-semibold text-lg">
          Online Status: {onlineStatus ? "🟢" : "🔴"}
        </li>
        <li>
          <Link
            to="/"
            className="text-white font-semibold text-lg hover:text-gray-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white font-semibold text-lg hover:text-gray-200"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-white font-semibold text-lg hover:text-gray-200"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/grocery"
            className="text-white font-semibold text-lg hover:text-gray-200"
          >
            Grocery
          </Link>
        </li>
        <li className="text-white font-semibold text-lg cursor-pointer hover:text-gray-200">
          <Link
            to="/cart"
            className="text-white font-semibold text-lg hover:text-gray-200"
          >
            Cart - ({cartItems.length})
          </Link>
        </li>
        <li>
          <button
            className="bg-white text-orange-400 hover:text-white hover:bg-orange-400 px-4 py-2 rounded-md shadow-md font-bold"
            onClick={() => {
              setbtnNameReact("Logout");
            }}
          >
            {btnNameReact}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
