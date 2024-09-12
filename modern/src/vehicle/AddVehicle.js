import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Box } from '@mui/material';
import Navbar from '../common/layout/Navbar';
import vehicleIcon from '../resources/images/icon/vehicle.svg';
import MultiStepForm from './MutliStepForm';
import { useTranslation } from "../common/components/LocalizationProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  contentWrapper: {
    display: 'flex',
    flexGrow: 1,
  },
  leftContent: {
    flex: 1,
    backgroundColor: 'rgb(242, 242, 242)',
    height: '100%',
  },
  rightContent: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deviceBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 450,
    width: '100%',
    marginTop: '3em',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  container: {
    textAlign: 'center',
    paddingBottom: '2.5em',
  },
  image: {
    width: '100%',
    padding: '16px',
  },
  header: {
    fontFamily: 'text-bold, sans-serif',
    fontSize: '30px',
    color: 'rgb(76, 76, 76)',
    textAlign: 'center',
    padding: '0.5em',
    fontWeight: 'bold',
  },
}));

const AddVehicle = () => {
  const classes = useStyles();

  const t = useTranslation();
  return (
    <div className={classes.root}>
      <Navbar />

      <div className={classes.contentWrapper}>
        <div className={classes.leftContent}>
          <div className={classes.deviceBox}>
            <Box className={classes.container}>
              <Typography className={classes.header}>
                {t("howToFindVINs")}
              </Typography>
              <Typography variant="body1">
                {t("addDeviceText1")}
              </Typography>
            </Box>
            <img src={vehicleIcon} alt="device" className={classes.image} />
            <Box className={classes.container}>
              <Typography variant="body1">
                {t("addDeviceText2")}
              </Typography>
            </Box>
          </div>
        </div>
        <div className={classes.rightContent}>
          <Box className={classes.container}>
            <Typography className={classes.header}>
              {t("addVehicle")}
            </Typography>
            <MultiStepForm />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
