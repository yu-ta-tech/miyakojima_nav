import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
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
import "mapbox-gl/dist/mapbox-gl.css";
import { spots } from "../lib/spots_detailData";

export default function SpotMap() {
  const [showPopup, setShowPopup] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  //router.queryが初回レンダリング時にundefinedになるため
  if (!router.isReady) {
    return null;
  }

  const onClick = (e) => {
    e.originalEvent.stopPropagation();
    showPopup ? setShowPopup(false) : setShowPopup(true);
  };

  return (
    <Map
      id="spotMap"
      initialViewState={{
        longitude: spots[id].longitude,
        latitude: spots[id].latitude,
        zoom: 11,
      }}
      style={{ top: "20px", width: "100%", height: "100%" }}
      // スタイル仕様 https://docs.mapbox.com/mapbox-gl-js/style-spec/
      mapStyle={"mapbox://styles/mapbox/streets-v8"}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_TOKEN}
    >
      <Marker
        longitude={spots[id].longitude}
        latitude={spots[id].latitude}
        anchor="bottom"
        onClick={onClick}
      />
      {showPopup && (
        <Popup
          longitude={spots[id].longitude}
          latitude={spots[id].latitude}
          offset={40}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          {spots[id].name}
        </Popup>
      )}
      <NavigationControl />
      <FullscreenControl position="bottom-right" />
    </Map>
  );
}
