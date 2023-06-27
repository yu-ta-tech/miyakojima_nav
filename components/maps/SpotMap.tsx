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
import { spots } from "../../lib/spots_detailData";

export default function SpotMap() {
  const [showPopup, setShowPopup] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  const idIndex = Number(id);

  //router.queryが初回レンダリング時にundefinedになるため
  if (!router.isReady) {
    return null;
  }

  const onClick = (e: any) => {
    e.originalEvent.stopPropagation();
    showPopup ? setShowPopup(false) : setShowPopup(true);
  };

  return (
    <Map
      id="spotMap"
      initialViewState={{
        longitude: Number(spots[idIndex].longitude),
        latitude: Number(spots[idIndex].latitude),
        zoom: 11,
      }}
      style={{ top: "20px", width: "100%", height: "100%" }}
      mapStyle={"mapbox://styles/mapbox/outdoors-v12"}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_TOKEN}
    >
      <Marker
        longitude={Number(spots[idIndex].longitude)}
        latitude={Number(spots[idIndex].latitude)}
        anchor="bottom"
        onClick={onClick}
      />
      {showPopup && (
        <Popup
          longitude={Number(spots[idIndex].longitude)}
          latitude={Number(spots[idIndex].latitude)}
          offset={40}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          {spots[idIndex].name}
        </Popup>
      )}
      <NavigationControl />
      <FullscreenControl position="bottom-right" />
    </Map>
  );
}
