import React from "react";
import makeStyles from "@mui/styles/makeStyles";

import {
  altitudeFromMeters,
  distanceFromMeters,
  speedFromKnots,
  speedToKnots,
  speedUnitString,
  volumeFromLiters,
  volumeToLiters,
} from "../../../common/util/converter";

import { useAttributePreference } from "../../../common/util/preferences";

import { useTranslation } from "../../components/LocalizationProvider";

const useStyles = makeStyles((theme) => ({
  mapSpeedTooltip: {
    background: "white",
    boxShadow: "0 0 10px -3px black",
    borderRadius: "25px",
    fontSize: "16px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
    padding: "3px 10px",
  },
  mapSpeedTooltipWrapper: {
    position: "absolute",
    top: "30%",
    right: "10px",
    display: "flex",
    flexDirection: "column",
  },
  tooltipIcon: {
    height: "16px",
    width: "16px",
    borderRadius: "50%",
    marginRight: "4px",
  },
}));

const MapSpeedTooTip = () => {
  const t = useTranslation();
  const classes = useStyles();
  const speedUnit = useAttributePreference("speedUnit");
  return (
    <div>
      <div className={classes.mapSpeedTooltipWrapper}>
        <span className={classes.mapSpeedTooltip}>
          <i
            style={{ background: "#FD9026" }}
            className={classes.tooltipIcon}
          ></i>
          0-{speedFromKnots(
            speedToKnots(55, "kmh"),
            speedUnit
          ).toFixed(0)}
           {speedUnitString(speedUnit, t)}
        </span>
        <span className={classes.mapSpeedTooltip}>
          <i
            style={{ background: "#6AAF2B" }}
            className={classes.tooltipIcon}
          ></i>
          {speedFromKnots(
            speedToKnots(55, "kmh"),
            speedUnit
          ).toFixed(0)}-{speedFromKnots(
            speedToKnots(75, "kmh"),
            speedUnit
          ).toFixed(0)}
          {speedUnitString(speedUnit, t)}
        </span>
        <span className={classes.mapSpeedTooltip}>
          <i
            style={{ background: "#0054FF" }}
            className={classes.tooltipIcon}
          ></i>
          {speedFromKnots(
            speedToKnots(75, "kmh"),
            speedUnit
          ).toFixed(0)}-{speedFromKnots(
            speedToKnots(90, "kmh"),
            speedUnit
          ).toFixed(0)}
          {speedUnitString(speedUnit, t)}
        </span>
        <span className={classes.mapSpeedTooltip}>
          <i
            style={{ background: "#FF01EE" }}
            className={classes.tooltipIcon}
          ></i>
          {speedFromKnots(
            speedToKnots(90, "kmh"),
            speedUnit
          ).toFixed(0)}-{speedFromKnots(
            speedToKnots(120, "kmh"),
            speedUnit
          ).toFixed(0)}
          {speedUnitString(speedUnit, t)}
        </span>
        <span className={classes.mapSpeedTooltip}>
          <i
            style={{ background: "#FF0104" }}
            className={classes.tooltipIcon}
          ></i>
          {speedFromKnots(
            speedToKnots(120, "kmh"),
            speedUnit
          ).toFixed(0)}+{speedUnitString(speedUnit, t)}
        </span>
      </div>
    </div>
  );
};

export default MapSpeedTooTip;
