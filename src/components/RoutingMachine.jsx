"use client";

import L from 'leaflet';
import 'leaflet-routing-machine';
import { useMap } from "react-leaflet";
import { useEffect, useRef } from "react";

export default function RoutingMachine({ locations, route, color, index, setStationId, setSelectedLocation, stationId }) {

    //console.log(route)

    //console.log(locations)

    const routeVisitStationsOrderBy = route.routeVisitsStations?.sort((a, b) => a.ordinalNumber - b.ordinalNumber)

    // const routeListTmp = routeVisitStationsOrderBy.map((routeVisitsStation) => {
    //     return locations.filter(location => location.id == routeVisitsStation.station)[0]
    // });

    const routeList = routeVisitStationsOrderBy.map((routeVisitsStation) => {
        return locations.filter(location => location.id == routeVisitsStation.station)[0]
    });

    //console.log(routeListTmp)

    // const routeList = [...routeListTmp, routeListTmp[0]]

    const map = useMap();
    // const travellerIcon = L.icon({ iconUrl: "/active-map-marker.png", iconSize: [26, 40] });
    // const marker = L.marker(currentPos, { icon: travellerIcon }).addTo(map);
    var routingIcon = new L.Icon({
        iconUrl: `/map-marker${index}.png`,
        iconSize: [18, 30]
    });

    var routingIconKho = new L.Icon({
        iconUrl: `/khotrungchuyen.png`,
        iconSize: [28, 46]
    });

    //console.log(routeList)

    const waypoints = routeList?.map((location) => L.latLng(location.lat, location.lng))
    const choosedWay = routeList.some(station => station.id === stationId)

    const markerRefs = useRef({});

    useEffect(() => {
        const routingInstance = L.Routing.control({
            waypoints,
            lineOptions: {
                styles: [{ color, weight: choosedWay ? 6 : 4 }]
            },
            createMarker: function (i, wp, nWps) {
                const isWarehouse = i === 0 || i === nWps - 1;
                const marker = L.marker(wp.latLng, {
                    icon: isWarehouse ? routingIconKho : routingIcon
                });

                const tooltipText = isWarehouse
                    ? `Kho trung chuyển: ${routeList[i].name}`
                    : `Bưu cục ${i + 1}: ${routeList[i].name}`;

                marker.bindTooltip(tooltipText, {
                    permanent: false,
                    direction: "top"
                });

                if (!isWarehouse) {
                    marker.bindPopup(`Bưu cục ${i + 1}: ${routeList[i].name}`);

                    marker.on("click", function () {
                        setStationId(routeList[i].id);
                        setSelectedLocation(routeList[i]);
                    });

                    markerRefs.current[routeList[i].id] = marker;
                }

                return marker;
            }
        }).addTo(map);

        // Loại bỏ giao diện mặc định của routing control
        const routingControlContainer = routingInstance.getContainer();
        const controlContainerParent = routingControlContainer.parentNode;
        controlContainerParent.removeChild(routingControlContainer);

        return () => {
            map.removeControl(routingInstance);
        };
    }, []);

    useEffect(() => {
        if (stationId && markerRefs.current[stationId]) {
            const marker = markerRefs.current[stationId];
            marker.openPopup();
            // marker.openTooltip();
        }
    }, [stationId]);

    return null;
}
