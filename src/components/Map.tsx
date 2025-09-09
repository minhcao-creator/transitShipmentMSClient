"use client"

import { memo, useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Popup,
  Tooltip
} from "react-leaflet";
import { Icon, LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import RoutingMachine from "./RoutingMachine"

type MapLocation = LatLngLiteral & { id: string, name: string, haveOrder: boolean };

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

  const mapMarkIconsNoneOrder = new Icon({
    iconUrl: "nonOrder.png",
    iconSize: [18, 28],
  });

  const markerMapRefs = useRef<Record<string, L.Marker>>({});


  useEffect(() => {
    if (stationId && markerMapRefs.current[stationId]) {
      const marker = markerMapRefs.current[stationId];
      marker.openPopup();
    }
  }, [stationId]);

  const renderMarks = () => {
    return locations?.map((location) => (
      location.id == '1338' ? <Marker
        key={location.id}
        ref={(el) => {
          if (el) markerMapRefs.current[location.id] = el;
        }}
        icon={mapMarkIcon}
        position={{ lat: location.lat, lng: location.lng }}
        eventHandlers={{
          click: () => {
            setSelectedLocation(location);
            setStationId(location.id);
          },
        }}
      >
        <Tooltip>{location.name}</Tooltip>
        <Popup>{location.name}</Popup>
      </Marker> :
        <Marker
          ref={(el) => {
            if (el) markerMapRefs.current[location.id] = el;
          }}
          icon={location.haveOrder ? mapMarkIcons : mapMarkIconsNoneOrder}
          position={{ lat: location.lat, lng: location.lng }}
          eventHandlers={{
            click: () => {
              setSelectedLocation(location);
              setStationId(location.id);
            },
          }}
        >
          <Tooltip>{location.name}</Tooltip>
          <Popup>{location.name}</Popup>
        </Marker>));
  };

  console.log('routes', routes)
  console.log('locations', locations)

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
                <RoutingMachine key={index} stationId={stationId} setSelectedLocation={setSelectedLocation} locations={locations} route={route} color={colors[index]} index={index} setStationId={setStationId} />
              )
            })
          }
        </MapContainer>
      </div>
    </>
  );
});
