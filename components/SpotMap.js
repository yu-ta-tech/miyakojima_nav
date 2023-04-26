import Image from "next/image";
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
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { spots } from "../lib/spots_detailData";

export default function SpotMap() {
  const router = useRouter();
  const { id } = router.query;

  //router.queryが初回レンダリング時にundefinedになるため
  if (!router.isReady) {
    return null;
  }
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
      <Marker longitude={spots[id].longitude} latitude={spots[id].latitude} anchor="bottom">
        {/* <Image src="/images/marker.png" width={30} height={30} /> */}
      </Marker>
      <NavigationControl />
      <FullscreenControl position="bottom-right" />
    </Map>
  );
}
