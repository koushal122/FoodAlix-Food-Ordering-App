import Card from "../Card/card";
import Shimmer from "../Card/shimmerCard";
import "./body.css";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../Utils/IsOnline.js"
import UserContext from "../Utils/Contexts";


const Body = () => {
    let data = [
        {
            "info": {
                "id": "614642",
                "name": "Soul Rasa",
                "cloudinaryImageId": "v9fczzlua1wnrx63fh1g",
                "locality": "Akkithimanahalli",
                "areaName": "Shanti Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Indian",
                    "Healthy Food",
                    "Home Food",
                    "South Indian",
                    "North Indian"
                ],
                "avgRating": 4.4,
                "feeDetails": {
                    "restaurantId": "614642",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3200
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3200
                },
                "parentId": "239281",
                "avgRatingString": "4.4",
                "totalRatingsString": "500+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 2.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "27 mins",
                    "lastMileTravelString": "2.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-10 23:30:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "brand"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-47dc018b-e1ef-4baf-8e64-7d0141747bbc"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/soul-rasa-akkithimanahalli-shanti-nagar-bangalore-614642",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "502957",
                "name": "Andhra Gunpowder",
                "cloudinaryImageId": "bs9qgsy25pn07pzn6xx1",
                "locality": "Shivananda Circle",
                "areaName": "Seshadripuram",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Andhra",
                    "Biryani",
                    "South Indian"
                ],
                "avgRating": 4.3,
                "feeDetails": {
                    "restaurantId": "502957",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 4400
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 4400
                },
                "parentId": "10496",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 36,
                    "lastMileTravel": 4.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "36 mins",
                    "lastMileTravelString": "4.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-11 01:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹499",
                    "discountTag": "FLAT DEAL"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-47dc018b-e1ef-4baf-8e64-7d0141747bbc"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-shivananda-circle-seshadripuram-bangalore-502957",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "392828",
                "name": "Big Bowl",
                "cloudinaryImageId": "992f217c2f122c0d8fc385855ca30722",
                "locality": "Chikka Lakshmaiah Layout",
                "areaName": "Adugodi",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Tibetan",
                    "Desserts"
                ],
                "avgRating": 3.8,
                "feeDetails": {
                    "restaurantId": "392828",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 6300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 6300
                },
                "parentId": "434792",
                "avgRatingString": "3.8",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "34 mins",
                    "lastMileTravelString": "6.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-11 03:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-47dc018b-e1ef-4baf-8e64-7d0141747bbc"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/big-bowl-chikka-lakshmaiah-layout-adugodi-bangalore-392828",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "56428",
                "name": "Puliyogare Point",
                "cloudinaryImageId": "wet9zrjusmdtkk16jlrz",
                "locality": "N.R Colony",
                "areaName": "Basavanagudi",
                "costForTwo": "₹150 for two",
                "cuisines": [
                    "South Indian"
                ],
                "avgRating": 4.5,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "56428",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 4400
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 4400
                },
                "parentId": "8409",
                "avgRatingString": "4.5",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 4.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "27 mins",
                    "lastMileTravelString": "4.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-10 22:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "10% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-47dc018b-e1ef-4baf-8e64-7d0141747bbc"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/puliyogare-point-n-r-colony-basavanagudi-bangalore-56428",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "30034",
                "name": "Mani's Dum Biryani",
                "cloudinaryImageId": "y0fjz8h4ad8nfzkmbznu",
                "locality": "Haudin Road",
                "areaName": "Ulsoor",
                "costForTwo": "₹499 for two",
                "cuisines": [
                    "Biryani"
                ],
                "avgRating": 4.4,
                "feeDetails": {
                    "restaurantId": "30034",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 4400
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 4400
                },
                "parentId": "623",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 4.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "26 mins",
                    "lastMileTravelString": "4.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-10 23:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-47dc018b-e1ef-4baf-8e64-7d0141747bbc"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/manis-dum-biryani-haudin-road-ulsoor-bangalore-30034",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "48230",
                "name": "Kanti Sweets",
                "cloudinaryImageId": "u0hhfifwmpsnobytv2yf",
                "locality": "Brigade Road",
                "areaName": "Brigade Road",
                "costForTwo": "₹150 for two",
                "cuisines": [
                    "Sweets"
                ],
                "avgRating": 4.5,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "48230",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3700
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3700
                },
                "parentId": "4700",
                "avgRatingString": "4.5",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 21,
                    "lastMileTravel": 2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "21 mins",
                    "lastMileTravelString": "2.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-10 22:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-47dc018b-e1ef-4baf-8e64-7d0141747bbc"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/kanti-sweets-brigade-road-bangalore-48230",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "533773",
                "name": "Third Wave Coffee",
                "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
                "locality": "Lavelle Road",
                "areaName": "Ashok Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Beverages",
                    "Bakery",
                    "Continental"
                ],
                "avgRating": 4.4,
                "feeDetails": {
                    "restaurantId": "533773",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3200
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3200
                },
                "parentId": "274773",
                "avgRatingString": "4.4",
                "totalRatingsString": "100+",
                "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 0.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "24 mins",
                    "lastMileTravelString": "0.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-11 00:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-47dc018b-e1ef-4baf-8e64-7d0141747bbc"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/third-wave-coffee-lavelle-road-ashok-nagar-bangalore-533773",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "63048",
                "name": "Sharief Bhai",
                "cloudinaryImageId": "eahrfj70zhzy621zi8yq",
                "locality": "Frazer Town",
                "areaName": "Frazer Town",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Biryani",
                    "Mughlai",
                    "Arabian",
                    "Kebabs",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                    "restaurantId": "63048",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 5700
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 5700
                },
                "parentId": "5734",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 34,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "34 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-11 01:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-47dc018b-e1ef-4baf-8e64-7d0141747bbc"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/sharief-bhai-frazer-town-bangalore-63048",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "2914",
                "name": "Bheema's",
                "cloudinaryImageId": "aff0be3ebc62e299701c087b8dcd1c0d",
                "locality": "Church Street",
                "areaName": "Ashok Nagar",
                "costForTwo": "₹550 for two",
                "cuisines": [
                    "Andhra"
                ],
                "avgRating": 4.4,
                "feeDetails": {
                    "restaurantId": "2914",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3700
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3700
                },
                "parentId": "1841",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 1.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "27 mins",
                    "lastMileTravelString": "1.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-10 15:30:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {
                "context": "seo-data-47dc018b-e1ef-4baf-8e64-7d0141747bbc"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/bheemas-church-street-ashok-nagar-bangalore-2914",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
    ];
    const [allRestaurants, setallRestaurants] = useState([]);
    let [filteredRestaurants, setfilteredRestaurants] = useState([]);
    let [searchvalue, setsearchvalue] = useState("");
    const {user,setUser}=useContext(UserContext);
    console.log(filteredRestaurants);
    async function getAllRestaurants() {
        //const response= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        //const json=response.json();
        //setallRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //setfilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(allRestaurants);
        setallRestaurants(data);
        setfilteredRestaurants(data);
    }

    function filterRestaurant(searchText) {
        setfilteredRestaurants(allRestaurants.filter((restaurant) => {
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
        }));
    }

    useEffect(() => {
        getAllRestaurants()

    }, []);
    const isOnline= useIsOnline();
    if(!isOnline){
        return <h1>Oh! No, You are Offline</h1>;
    }
    return (
        (filteredRestaurants.length === 0) ? <Shimmer /> :
            (<div className="body-comp">
                <input type="text" className="search-input" placeholder="Search Restaurants"
                    value={user.name}
                    onChange={(e) => {
                        setsearchvalue(e.target.value);
                        setUser({
                            ...user, 
                            name:e.target.value,
                        })
                    }}
                ></input>
                <button type="search" className="search-button"
                    onClick={() => {
                        filterRestaurant(searchvalue);
                        console.log(searchvalue);
                    }}>Search</button>
                <div className="restaurants">
                    {
                        filteredRestaurants.map((restaurant) => {
                            return <Link to='/restaurant/roti'><Card {...restaurant} /> </Link>
                        })}
                </div>
            </div>
            )
    )
}

export default Body
