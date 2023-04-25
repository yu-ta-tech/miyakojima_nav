import Image from "next/image";
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

export default function SpotMap() {
  return (
    <Map
      id="spotMap"
      initialViewState={{
        longitude: "125.3246",
        latitude: "24.7673",
        zoom: 11,
      }}
      style={{ top: "20px", bottom: "20px", width: 448, height: 408 }}
      mapStyle={"mapbox://styles/mapbox/light-v10"}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_TOKEN}
    >
      <Marker longitude={125.3246} latitude={24.7673} anchor="bottom">
        <Image src="/images/marker.png" width={30} height={30} />
      </Marker>
      <NavigationControl />
      <FullscreenControl position="bottom-right" />
    </Map>
  );
}
