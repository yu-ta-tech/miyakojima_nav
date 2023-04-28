import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
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
import "mapbox-gl/dist/mapbox-gl.css";

export default function AllMap() {
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
        />
      )),
    []
  );

  // onClickでMarkerのlngLat取得→Popupに代入したい
  // const onClick = (event) => {
  //   if(showPopup) return ;
  //   const point = event.target.on();
  //   console.log(event)
  //   setDestination({ lng: point._lngLat.lng, lat: point._lngLat.lat });
  //   setShowPopup(true);
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
    >
      {markers}

      {/* {spots &&
        spots.map((spot, i) => (
          <div key={i}>
            <Marker
              longitude={spot.longitude}
              latitude={spot.latitude}
              anchor="bottom"
              onClick={onClick}
            />
          </div>
        ))} */}
      {/* 初回クリック時にdestinationがnullで帰ってくるため、初回のみエラー出る
        　　　しかし、２回目以降はMarkerの上にPopup出るようになった！
        　　　あとはエラー解消と、クリックされたMarkerの情報を拾いたい */}
      {popupInfo && (
        <Popup
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          anchor="top"
          offset={-20}
          onClose={() => setPopupInfo(null)}
          // closeOnClick={false}
        >
          <Link href={`/locations/${spots.indexOf(popupInfo)}`}>
            <div className="text-sm text-blue-500 underline">{popupInfo.name}</div>
          </Link>
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
