import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

/*
 * Header
 *    Logo
 *    Nav Items
 * Body
 *    Search
 *    Restaurant Container
 *        RestaurantCard
 *          - Image
 *          - Name of Restaurant
 *          - Star Rating
 *          - Cuisine
 *          - Deivery Time
 * Footer
 *    Copyright
 *    Links
 *    Address
 *    Contact
 */

const AppLayout = () => {
  const [userName, setUserName] = useState();
  // Authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Atul Kumar",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
