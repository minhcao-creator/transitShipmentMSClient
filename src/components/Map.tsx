import { memo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  ZoomControl,
} from "react-leaflet";
import { Icon, LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import RoutingMachine from "./RoutingMachine"

type MapType = "roadmap" | "satellite" | "hybrid" | "terrain";

type MapLocation = LatLngLiteral & { id: string };

type MapProps = {
  center: LatLngLiteral;
  locations: MapLocation[];
  routes: any;
};

const SelectedLocation = ({ center }: { center: LatLngLiteral }) => {
  const map = useMap();
  map.panTo(center, { animate: true });
  return null;
};

export const Map: React.FC<MapProps> = memo(({ center, locations, routes }) => {
  const [mapType, setMapType] = useState<MapType>("roadmap");
  const [selectedLocation, setSelectedLocation] = useState<
    MapLocation | undefined
  >();

  const getUrl = () => {
    const mapTypeUrls: Record<MapType, string> = {
      roadmap: "http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}",
      satellite: "http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}",
      hybrid: "http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}",
      terrain: "http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
    };
    return mapTypeUrls[mapType];
  };

  const mapMarkIcon = new Icon({
    iconUrl: "khotrungchuyen.png",
    iconSize: [25, 40],
  });

  const renderMarks = () => {
    return locations.map((location) => (
      <div key={location.id}>
        <Marker
          icon={mapMarkIcon}
          position={{ lat: location.lat, lng: location.lng }}
          eventHandlers={{
            click: () => {
              setSelectedLocation(location);
            },
          }}
        />
      </div>
    ));
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={center}
          zoom={13}
          minZoom={5}
          zoomControl={false}
          attributionControl={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer url={getUrl()} />
          {selectedLocation && <SelectedLocation center={selectedLocation} />}
          {renderMarks()}
          <ZoomControl position="topright" />
          {
            routes?.map((route: any, index: number) => {
              return (
                <RoutingMachine locations={route} color={'#37AB9C'} index={index} />
              )
            })
          }
        </MapContainer>
      </div>
      {/* <div style={{ display: "flex", marginTop: "10px", gap: "20px" }}>
        <button onClick={() => setMapType("roadmap")}>roadmap</button>
        <button onClick={() => setMapType("satellite")}>satellite</button>
        <button onClick={() => setMapType("hybrid")}>hybrid</button>
        <button onClick={() => setMapType("terrain")}>terrain</button>
      </div> */}
    </>
  );
});
