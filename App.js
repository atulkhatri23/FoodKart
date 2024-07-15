import React from "react";
import ReactDOM from "react-dom";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
          cloudinaryImageId
        }
      />
      <h3> {name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "414842",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Sai Nath Colony",
      areaName: "RTC",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-16 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-sai-nath-colony-rtc-vizianagaram-414842",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "180993",
      name: "Helapuri Restaurant",
      cloudinaryImageId: "41eca0ba5754c3b92eedcd1662630630",
      locality: "Balaji Nagar",
      areaName: "RTC Complex Area",
      costForTwo: "₹300 for two",
      cuisines: [
        "Biryani",
        "Tandoor",
        "Chinese",
        "South Indian",
        "Hyderabadi",
        "Indian",
      ],
      avgRating: 4.1,
      parentId: "5228",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/helapuri-restaurant-balaji-nagar-rtc-complex-area-vizianagaram-180993",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "355159",
      name: "Daksha Restauarnt",
      cloudinaryImageId: "846206fafb250767cba6c4a65b97f806",
      locality: "LTB Road",
      areaName: "Opp LIC Building",
      costForTwo: "₹350 for two",
      cuisines: [
        "Biryani",
        "Tandoor",
        "Chinese",
        "South Indian",
        "Hyderabadi",
        "Indian",
      ],
      avgRating: 4.1,
      parentId: "68118",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/daksha-restauarnt-ltb-road-opp-lic-building-vizianagaram-355159",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "522227",
      name: "Sunny Family Restaurant",
      cloudinaryImageId: "mupmjeunoyntgju6lgt3",
      locality: "Subramanyam Peta",
      areaName: "Babametta",
      costForTwo: "₹350 for two",
      cuisines: [
        "Biryani",
        "Tandoor",
        "Chinese",
        "South Indian",
        "Hyderabadi",
        "Indian",
      ],
      avgRating: 4.2,
      parentId: "284419",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sunny-family-restaurant-subramanyam-peta-babametta-vizianagaram-522227",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "562307",
      name: "Ganesh Sweets & Bakery",
      cloudinaryImageId: "emvhrj1esgg3la9pxxii",
      locality: "AG Road",
      areaName: "3 Lamps Junction",
      costForTwo: "₹250 for two",
      cuisines: [
        "Sweets",
        "Bakery",
        "Chaat",
        "South Indian",
        "Chinese",
        "Beverages",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "7076",
      avgRatingString: "4.4",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/ganesh-sweets-and-bakery-ag-road-3-lamps-junction-vizianagaram-562307",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "180972",
      name: "Hello Kitchen",
      cloudinaryImageId: "c6fjmnouni0v8e9386kz",
      locality: "Sai Nath Colony",
      areaName: "Kalava Puvvu Meda Junction",
      costForTwo: "₹350 for two",
      cuisines: [
        "Biryani",
        "Tandoor",
        "Chinese",
        "South Indian",
        "Hyderabadi",
        "Indian",
      ],
      avgRating: 3.9,
      parentId: "12699",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-16 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hello-kitchen-sai-nath-colony-kalava-puvvu-meda-junction-vizianagaram-180972",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "355270",
      name: "Sairam Tiffins",
      cloudinaryImageId: "cvbjhlksmv6lybzttb6z",
      locality: "Sai Nath Colony",
      areaName: "Near ICe Factory Junction",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian", "Thalis"],
      avgRating: 4.2,
      veg: true,
      parentId: "175828",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 23:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sairam-tiffins-sai-nath-colony-near-ice-factory-junction-vizianagaram-355270",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "486116",
      name: "Hotel Muntaj",
      cloudinaryImageId: "drapfrxodmzqodkukjoa",
      locality: "Sai Nath Colony",
      areaName: "Road Transport Corporation",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "Chinese", "Indian"],
      avgRating: 4.3,
      parentId: "237293",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-muntaj-sai-nath-colony-road-transport-corporation-vizianagaram-486116",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "502796",
      name: "konaseema Tiffins",
      cloudinaryImageId: "d439cedbe5da7c403b338a2a4a52d550",
      locality: "Bhagawan Nagar",
      areaName: "100 Feet Ring Road",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian", "Indian", "Andhra", "Coastal"],
      avgRating: 4.3,
      veg: true,
      parentId: "301230",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/konaseema-tiffins-bhagawan-nagar-100-feet-ring-road-vizianagaram-502796",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "583692",
      name: "Star Biryani Point",
      cloudinaryImageId: "kupele2bix5opbmhkbqy",
      locality: "Cantonment, Ganesh Kovela Junction",
      areaName: "Contonement",
      costForTwo: "₹300 for two",
      cuisines: [
        "Biryani",
        "Tandoor",
        "Chinese",
        "South Indian",
        "Hyderabadi",
        "Indian",
      ],
      avgRating: 4.2,
      parentId: "195330",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/star-biryani-point-cantonment-ganesh-kovela-junction-contonement-vizianagaram-583692",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "542901",
      name: "Sunny Dhaba",
      cloudinaryImageId: "jn2se551ty42ti4mxs0r",
      locality: " Pedathadivada Village",
      areaName: "Thadivada",
      costForTwo: "₹350 for two",
      cuisines: [
        "Biryani",
        "Tandoor",
        "Chinese",
        "South Indian",
        "Hyderabadi",
        "Indian",
      ],
      avgRating: 4.2,
      parentId: "197196",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 23:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sunny-dhaba-peda-village-thadivada-vizianagaram-542901",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "261249",
      name: "Hotel Shalimar",
      cloudinaryImageId: "dimhf5adu9gsa0plvec7",
      locality: "Begusarai Rd",
      areaName: "Contonement",
      costForTwo: "₹250 for two",
      cuisines: [
        "Biryani",
        "Tandoor",
        "Chinese",
        "South Indian",
        "Hyderabadi",
        "Indian",
      ],
      avgRating: 4.2,
      parentId: "12793",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-shalimar-begusarai-rd-contonement-vizianagaram-261249",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "552461",
      name: "Birlao",
      cloudinaryImageId: "eojucqcjjqvrwsncutre",
      locality: "Thamanna Enclave",
      areaName: "RTC Complex",
      costForTwo: "₹300 for two",
      cuisines: [
        "Biryani",
        "Chinese",
        "Indian",
        "Hyderabadi",
        "South Indian",
        "Andhra",
      ],
      avgRating: 4.1,
      parentId: "331787",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/birlao-thamanna-enclave-rtc-complex-vizianagaram-552461",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "826600",
      name: "Pastas By Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/e77822ad-4e01-4a38-ae6b-f50cd19352dd_826600.JPG",
      locality: "Sai Nath Colony",
      areaName: "RTC",
      costForTwo: "₹400 for two",
      cuisines: ["Pastas"],
      avgRating: 3.7,
      parentId: "306806",
      avgRatingString: "3.7",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-16 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-sai-nath-colony-rtc-vizianagaram-826600",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "481078",
      name: "Sairam Tiffins",
      cloudinaryImageId: "nkimr1x3ex42tzimennv",
      locality: "Balaji Nagar",
      areaName: "Ethu Bridge Junction",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Chinese", "Biryani"],
      avgRating: 4.4,
      veg: true,
      parentId: "463951",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sairam-tiffins-balaji-nagar-ethu-bridge-junction-vizianagaram-481078",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "125945",
      name: "Creme Shakes",
      cloudinaryImageId: "tqbr5iohbsm5f5gyi3yo",
      locality: "Balaji Nagar",
      areaName: "Road Transport Corporation",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Sweets", "Beverages"],
      avgRating: 4.1,
      veg: true,
      parentId: "5305",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/creme-shakes-balaji-nagar-road-transport-corporation-vizianagaram-125945",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "660372",
      name: "House of Biryani's",
      cloudinaryImageId: "43fff32614b406635a382d3e8fdbe708",
      locality: "Sai Nath Colony",
      areaName: "100 Feet Ring Road",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Tandoor",
        "Chinese",
        "South Indian",
        "Hyderabadi",
        "Indian",
      ],
      avgRating: 4.4,
      parentId: "263643",
      avgRatingString: "4.4",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/house-of-biryanis-sai-nath-colony-100-feet-ring-road-vizianagaram-660372",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "660481",
      name: "The Dessert Zone",
      cloudinaryImageId: "c447c9ce7d0bbe78e46141e866236762",
      locality: "Naidu Colony",
      areaName: "RTC",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.2,
      parentId: "10414",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-dessert-zone-naidu-colony-rtc-vizianagaram-660481",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "327241",
      name: "Delights by INOX",
      cloudinaryImageId: "b857fcf611707fedd3773eb02688f925",
      locality: "NCS Mall",
      areaName: "RTC",
      costForTwo: "₹400 for two",
      cuisines: ["Snacks"],
      avgRating: 3.8,
      veg: true,
      parentId: "385095",
      avgRatingString: "3.8",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-16 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/delights-by-inox-ncs-mall-rtc-vizianagaram-327241",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "716015",
      name: "Sweet India",
      cloudinaryImageId: "0e49d453a355d7125ab9d480f2ddd19d",
      locality: "Sai Durga Complex",
      areaName: "Railway Station Road",
      costForTwo: "₹250 for two",
      cuisines: [
        "Sweets",
        "Bakery",
        "Chaat",
        "South Indian",
        "Chinese",
        "Beverages",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "5299",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-15 20:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sweet-india-sai-durga-complex-railway-station-road-vizianagaram-716015",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
