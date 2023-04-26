import { useState } from "react";
import { useRef } from "react";
import { spots } from "../lib/spots_detailData";
import Map, {
  Layer,
  LayerProps,
  MapProvider,
  Marker,
  MarkerDragEvent,
  NavigationControl,
  Source,
  useMap,
  FullscreenControl,
  Popup,
} from "react-map-gl";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "../lib/layers";
import "mapbox-gl/dist/mapbox-gl.css";

export default function ClusterMap() {
  const [showPopup, setShowPopup] = useState(false);
  const [destination, setDestination] = useState(null);

  const mapRef = useRef(null);

  const onClick = (event) => {
    if (showPopup) return;
    setShowPopup(true);
    setDestination({ lat: event.lngLat.lat, lng: event.lngLat.lng });

    // const lon = event.longitude;
    // const lat = event.latitude;
    // console.log(event.lngLat.lat);
    // console.log(event.lngLat.lng);
    // showPopup ? setShowPopup(false) : setShowPopup(true);
  };

  // const onClick = (event) => {
  //   const feature = event.features[0];
  //   const clusterId = feature.properties.cluster_id;

  //   const mapboxSource = mapRef.current.getSource("earthquakes");

  //   mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
  //     if (err) {
  //       return;
  //     }

  //     mapRef.current.easeTo({
  //       center: feature.geometry.coordinates,
  //       zoom,
  //       duration: 500,
  //     });
  //   });
  // };
  return (
    <Map
      id="ClusterMap"
      initialViewState={{
        longitude: "125.3246",
        latitude: "24.7673",
        zoom: 10,
      }}
      style={{ top: "20px", width: "70%", height: "50vh" }}
      // スタイル仕様 https://docs.mapbox.com/mapbox-gl-js/style-spec/
      mapStyle={"mapbox://styles/mapbox/light-v10"}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_TOKEN}
      onClick={onClick}
    >
      {/* clustermapにしたいけど、できてない。https://visgl.github.io/react-map-gl/examples/clusters */}
      {/* <Source
        id="earthquakes"
        type="geojson"
        data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
        cluster={true}
        clusterMaxZoom={14}
        clusterRadius={50}
      >
        <Layer {...clusterLayer} />
        <Layer {...clusterCountLayer} />
        <Layer {...unclusteredPointLayer} />
      </Source> */}

      {spots &&
        spots.map((spot, i) => (
          <div key={i}>
            <Marker
              longitude={spot.longitude}
              latitude={spot.latitude}
              anchor="bottom"
            />
          </div>
        ))}
        {/* なぜかdestination && にしたら、一回だけPopup出る
        　　　あとは、Markerある位置のみPopup出したい */}
      {showPopup && (
        <Popup
          longitude={destination.lng}
          latitude={destination.lat}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          aaa
        </Popup>
      )}
      <NavigationControl />
    </Map>
  );
}
