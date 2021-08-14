import react from "react";
import GoogleMapReact from "google-map-react";
import {Paper, Typography, useMediaQuery} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./styles";

const Maps = ({setBounds, setCoordinates, coordinates})=> {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');


    return (
        <div className={classes. mapContainer}>
            <GoogleMapReact    /*main component which will provide map from google maps api*/
                bootstrapURLKeys={{key: 'AIzaSyDBRxOlgkPQv-tQe1wydXs7GpgMt7RJHsc' }}  /*google map api key*/
                defaultCenter={coordinates}  /*default centered place's co ordinates*/
                center={coordinates}
                defaultZoom={2}
                margin={[50,50,50,50]} /*four margins*/
                options={''}
                onChange={(e)=> {
                    setCoordinates({lat: e.center.lat , lng: e.center.lng });
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={''}   /*upadte when user will select any other resturant*/
            >

            </GoogleMapReact>
        </div>
    )
}

export default Maps;