"use client";

import L from 'leaflet';
import 'leaflet-routing-machine';
import { useMap } from "react-leaflet";
import { useEffect } from "react";

export default function RoutingMachine({ locations, color, index }) {
    const map = useMap();
    // const travellerIcon = L.icon({ iconUrl: "/active-map-marker.png", iconSize: [26, 40] });
    // const marker = L.marker(currentPos, { icon: travellerIcon }).addTo(map);
    var routingIcon = new L.Icon({
        iconUrl: `/map-marker${index}.png`,
        iconSize: [12, 20]
    });

    const waypoints = locations.map((location) => L.latLng(location))

    useEffect(() => {
        const routingInstance = L.Routing.control({
            waypoints,
            lineOptions: {
                styles: [
                    { color, opacity: 0.5, weight: 4 }
                ]
            },
            createMarker: function (i, wp, nWps) {
                // here change the starting and ending icons
                return L.marker(wp.latLng, {
                    icon: routingIcon // here pass the custom marker icon instance
                });
            }
        }).addTo(map);

        const routingControlContainer = routingInstance.getContainer()
        const controlContainerParent = routingControlContainer.parentNode
        controlContainerParent.removeChild(routingControlContainer)

        // routingInstance.on('routesfound', (d) => {
        //     const routes = d.routes?.[0]?.coordinates ?? [];

        //     let index = 0;
        //     const updateMarkerPosition = () => {
        //         if (index < routes.length) {
        //             const cord = routes[index];
        //             marker.setLatLng([cord.lat, cord.lng]);
        //             index++;
        //             map.panTo([cord.lat, cord.lng], { animate: true, duration: 0.5, easeLinearity: 0.5, noMoveStart: true });
        //             requestAnimationFrame(updateMarkerPosition);
        //         }
        //     };

        //     updateMarkerPosition();
        // });
    }, []);

    return null;
}
