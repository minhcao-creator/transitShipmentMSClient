"use client"

import { memo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
} from "react-leaflet";
import { Icon, LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import RoutingMachine from "./RoutingMachine"

type MapLocation = LatLngLiteral & { id: string, name: string };

type MapProps = {
  center: LatLngLiteral;
  locations: MapLocation[];
  routes: any;
  setStationId: any,
  stationId: any,
};

const SelectedLocation = ({ center }: { center: LatLngLiteral }) => {
  const map = useMap();
  map.panTo(center, { animate: true });
  return null;
};

export const Map = memo(({ center, locations, routes, setStationId, stationId }: MapProps) => {
  const [selectedLocation, setSelectedLocation] = useState<
    MapLocation | undefined
  >();

  const colors = ['#3859B1', '#EE2677', '#8D775F', '#FFD900', '#003C67', '#67003B', '#00BD55', '#FFAC05', '#B50000']

  const mapMarkIcon = new Icon({
    iconUrl: "khotrungchuyen.png",
    iconSize: [28, 46],
  });
  const mapMarkIcons = new Icon({
    iconUrl: "khotrungchuyen.png",
    iconSize: [18, 28],
  });

  const renderMarks = () => {
    return locations?.map((location) => (
      <div key={location.id}>
        {location.id == '1420' ? <Marker
          icon={mapMarkIcon}
          position={{ lat: location.lat, lng: location.lng }}
          eventHandlers={{
            click: () => {
              setSelectedLocation(location);
            },
          }}
        /> :
          <Marker
            icon={mapMarkIcons}
            position={{ lat: location.lat, lng: location.lng }}
            eventHandlers={{
              click: () => {
                setSelectedLocation(location);
              },
            }}
          />}
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
          <TileLayer url={"http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}"} />
          {selectedLocation && <SelectedLocation center={selectedLocation} />}
          {!routes && renderMarks()}
          {
            routes?.map((route: any, index: number) => {
              return (
                <RoutingMachine stationId={stationId} setSelectedLocation={setSelectedLocation} locations={locations} route={route} color={colors[index]} index={index} setStationId={setStationId} />
              )
            })
          }
        </MapContainer>
      </div>
    </>
  );
});
