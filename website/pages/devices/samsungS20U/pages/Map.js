import React, { useRef, useEffect } from "react";
import { IRestaurant, useData } from "../SamsungS20UContext";

function formatedInfoWindows(restaurant) {
  return `<div>
              <img class="h-20 object-cover w-full rounded-md" src=${
                restaurant.src
              } alt=""/>
              <h1 class="font-bold text-lg">${restaurant.title}</h1>
                  <div class="flex items-center gap-1 text-2xs mb-1">
                      <img class="h-3" src="/devices/samsungS20U/map_pin_purple.svg" />
                      <p>${restaurant.address}</p>
                  </div>
              <div class="flex gap-1 overflow-x-auto" >
              ${restaurant.menuList.map(
                (e) =>
                  `<img class="flex-none h-8 w-12 object-cover rounded-md" src=${e.src} />`
              )}
              </div>
              <button  id="${
                restaurant.id
              }" class="bg-Purple-darkest text-white mt-2 py-1 w-full text-center text-xs rounded-sm">Show menu list</button>
          </div>`;
}
const googlMapStyle = [
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];
function Map() {
  const context = useData();
  const googleMapRef = useRef(null);
  let googleMap;
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      createGoogleMap();
    });
  }, []);

  const createGoogleMap = () => {
    const infowindow = new google.maps.InfoWindow();
    googleMap = new google.maps.Map(googleMapRef.current, {
      zoom: 13,
      center: {
        lat: 45.460122,
        lng: -75.757143,
      },
      disableDefaultUI: true,
      styles: googlMapStyle,
    });

    function placeMarker(restaurant) {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(
          restaurant.location.latitude,
          restaurant.location.longitude
        ),
        map: googleMap,
        icon: "/devices/samsungS20U/map_pin_purple.svg",
      });
      google.maps.event.addListener(marker, "click", function () {
        infowindow.close(); // Close previously opened infowindow
        infowindow.setContent(
          `<div id="infowindow">${formatedInfoWindows(restaurant)}</div>`
        );
        infowindow.open(googleMap, marker);
      });
      google.maps.event.addListener(infowindow, "domready", function () {
        let id = document.getElementById(restaurant.id);
        if (id) {
          google.maps.event.addDomListener(id, "click", function () {
            context?.dispatchData({
              type: "CHANGE_CURRENT_RESTAURANT",
              action: {
                restaurant: context.data.data.filter((e) => e.id === id?.id)[0],
              },
            });
            context?.dispatchData({ type: "CHANGE_PAGE", action: { page: 3 } });
          });
        }
      });
    }
    context?.data.data.forEach(placeMarker);
  };

  return (
    <div className="h-screen flex flex-col relative">
      <div ref={googleMapRef} className="bg-pink-50 flex-1"></div>
    </div>
  );
}

export default Map;
