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
};

const SelectedLocation = ({ center }: { center: LatLngLiteral }) => {
  const map = useMap();
  map.panTo(center, { animate: true });
  return null;
};

export const Map: React.FC<MapProps> = memo(({ center, locations }) => {
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
          <RoutingMachine locations={[[10.844834, 106.639579], [10.783838, 106.623397], [10.75561759411038, 106.64372159732207], [10.73829, 106.63353], [10.756358, 106.703772], [10.844834, 106.639579]]} color={'#37AB9C'} index={'1'} />
          <RoutingMachine locations={[[10.844834, 106.639579], [10.8070035, 106.6203028], [10.8245, 106.701861], [10.5878863, 106.851401], [10.844834, 106.639579]]} color={'#AB6037'} index={'2'} />
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
