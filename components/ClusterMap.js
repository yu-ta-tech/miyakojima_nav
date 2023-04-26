import Image from "next/image";
import { useRef } from "react";
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
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "../lib/layers";
import "mapbox-gl/dist/mapbox-gl.css";

export default function ClusterMap() {
  const mapRef = useRef(null);

  const onClick = (event) => {
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = mapRef.current.getSource("earthquakes");

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      mapRef.current.easeTo({
        center: feature.geometry.coordinates,
        zoom,
        duration: 500,
      });
    });
  };
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
      <Source
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
      </Source>
      <Marker longitude={125.3246} latitude={24.7673} anchor="bottom">
        <Image src="/images/marker.png" width={30} height={30} />
      </Marker>
      <NavigationControl />
    </Map>
  );
}
