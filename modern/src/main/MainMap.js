import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import MapView from "../map/core/MapView";
import MapSelectedDevice from "../map/main/MapSelectedDevice";
import MapAccuracy from "../map/main/MapAccuracy";
import MapGeofence from "../map/MapGeofence";
import MapCurrentLocation from "../map/MapCurrentLocation";
import PoiMap from "../map/main/PoiMap";
import MapPadding from "../map/MapPadding";
import { devicesActions } from "../store";
import MapDefaultCamera from "../map/main/MapDefaultCamera";
import MapLiveRoutes from "../map/main/MapLiveRoutes";
import MapPositions from "../map/MapPositions";
import MapOverlay from "../map/overlay/MapOverlay";
import MapGeocoder from "../map/geocoder/MapGeocoder";
import MapScale from "../map/MapScale";
import MapNotification from "../map/notification/MapNotification";
import useFeatures from "../common/util/useFeatures";
import MapMarkers from "../map/MapMarkers";

const MainMap = ({
  filteredPositions,
  selectedPosition,
  onEventsClick,
  markerClickEvent,
  markers,
}) => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  const eventsAvailable = useSelector((state) => !!state.events.items.length);

  const features = useFeatures();

  // console.log("markers >>>>>>>>>>>>>>>>>>>>", markers);

  const onMarkerClick = useCallback(
    (_, deviceId) => {
      if (deviceId) {
        dispatch(devicesActions.selectId(deviceId));
        markerClickEvent(deviceId);
      }
    },
    [dispatch]
  );

  return (
    <>
      <MapView>
        <MapOverlay />
        <MapGeofence />
        <MapAccuracy positions={filteredPositions} />
        <MapLiveRoutes />
        {markers?.length && <MapMarkers markers={markers} />}
        <MapPositions
          positions={filteredPositions}
          onClick={onMarkerClick}
          selectedPosition={selectedPosition}
          showStatus
        />
        <MapDefaultCamera />
        <MapSelectedDevice />
        <PoiMap />
      </MapView>
      <MapScale />
      <MapCurrentLocation />
      <MapGeocoder />
      {!features.disableEvents && (
        <MapNotification enabled={eventsAvailable} onClick={onEventsClick} />
      )}
      {desktop && (
        <MapPadding left={parseInt(theme.dimensions.drawerWidthDesktop, 10)} />
      )}
    </>
  );
};

export default MainMap;