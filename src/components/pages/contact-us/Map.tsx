"use client";

import React from "react";
import NeshanMap, { OlMap, Ol } from "@neshan-maps-platform/react-openlayers";

import "@neshan-maps-platform/react-openlayers/dist/style.css";

const Map = () => {
  const onInit = (ol: Ol, map: OlMap) => {
    const marker = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([51.434652, 35.707946])),
    });

    marker.setStyle(
      new ol.style.Style({
        image: new ol.style.Circle({
          fill: new ol.style.Fill({
            color: "#007AFF",
          }),
          stroke: new ol.style.Stroke({
            color: "#F2F2F2",
            width: 2,
          }),
          radius: 12,
        }),
      })
    );

    const vectorSource = new ol.source.Vector({
      features: [marker],
    });

    const vectorLayer = new ol.layer.Vector({
      source: vectorSource,
    });

    map.addLayer(vectorLayer);
  };
  return (
    <NeshanMap
      mapKey="web.ea417b3682ee4b978ad491727ce8c43f"
      serviceKey="service.02e2bbf711534af5bbc9470758c3e74e"
      defaultType="neshan"
      zoom={16}
      center={{ latitude: 35.707946, longitude: 51.434652 }}
      poi={true}
      traffic={false}
      onInit={onInit}
    ></NeshanMap>
  );
};

export default Map;
