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

  const onClick = () => {
    showPopup ? setShowPopup(false) : setShowPopup(true);
    console.log(showPopup)
  };

  return (
      <Map
        id="spotMap"
        initialViewState={{
          longitude: spots[id].longitude,
          latitude: spots[id].latitude,
          zoom: 12,
        }}
        style={{ top: "20px", bottom: "20px", width: 448, height: 408 }}
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
            anchor="bottom"
            onClose={() => setShowPopup(false)}
            closeOnClick={false}
          >
            {spots[id].name}
          </Popup>
        )}
        <NavigationControl />
        <FullscreenControl position="bottom-right" />
      </Map>
  );
}
