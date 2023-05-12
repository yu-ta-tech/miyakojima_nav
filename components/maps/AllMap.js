import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { spots } from "../../lib/spots_detailData";
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

export default function AllMap({ tabIndex }) {
  const [popupInfo, setPopupInfo] = useState(null);

  const markers = useMemo(
    () =>
      spots.map((spot, index) => (
        <Marker
          key={index}
          longitude={spot.longitude}
          latitude={spot.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(spot);
          }}
        >
          <Image
            className="rounded-full"
            width={20}
            height={20}
            src={`/icons/${spot.icon}.jpg`}
          />
        </Marker>
      )),
    []
  );

  return (
    <Map
      id="ClusterMap"
      initialViewState={{
        longitude: "125.30671897208508",
        latitude: "24.7885036757072867673",
        zoom: 10,
      }}
      style={{ top: "20px", width: "85%", height: "100%" }}
      mapStyle={"mapbox://styles/mapbox/light-v10"}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_TOKEN}
    >
      {markers}

      {popupInfo && (
        <Popup
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          anchor="top"
          offset={-20}
          onClose={() => setPopupInfo(null)}
        >
          <Link href={`/locations/${spots.indexOf(popupInfo)}`}>
            <span className="text-sm text-blue-500 hover:text-blue-700 underline">
              {popupInfo.name}
            </span>
          </Link>
          <br />
          <Image
            width={160}
            height={120}
            src={`/images/${spots.indexOf(popupInfo)}.jpg`}
          />
        </Popup>
      )}
      <NavigationControl />
    </Map>
  );
}
