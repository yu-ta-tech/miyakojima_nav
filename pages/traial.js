import React, { useState, useRef } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_BOX_TOKEN;

const Map = () => {
  const [popupInfo, setPopupInfo] = useState(null);

  const mapRef = useRef(null);

  const handleMarkerClick = (e) => {
    const { features } = e;
    const popupContent = features[0].properties.name;
    const [lng, lat] = features[0].geometry.coordinates;
    const popup = new mapboxgl.Popup()
      .setLngLat([lng, lat])
      .setHTML(popupContent);
    popup.addTo(mapRef.current);
    setPopupInfo(popup);
  };

  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-96, 37.8],
      zoom: 3,
    });

    map.on("load", () => {
      map.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: { name: "New York City" },
              geometry: { type: "Point", coordinates: [-74.0059, 40.7128] },
            },
            {
              type: "Feature",
              properties: { name: "Los Angeles" },
              geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
            },
            {
              type: "Feature",
              properties: { name: "Chicago" },
              geometry: { type: "Point", coordinates: [-87.6298, 41.8781] },
            },
          ],
        },
      });

      map.addLayer({
        id: "places",
        type: "circle",
        source: "places",
        paint: {
          "circle-color": "#4264fb",
          "circle-radius": 6,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      });

      map.on("click", "places", handleMarkerClick);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "500px" }} />;
};

export default Map;
