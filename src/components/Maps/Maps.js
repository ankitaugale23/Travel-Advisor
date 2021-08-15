import react from "react";
import GoogleMapReact from "google-map-react";
import {Paper, Typography, useMediaQuery} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

const Maps = ({setBounds, setCoordinates, coordinates,places,setChildClicked})=> {

    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width: 600px)');


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
                onChildClick={(child)=> { setChildClicked(child) }}   /*upadte when user will select any other resturant*/
                >
                  {places?.map((place,i)=> (                    //code to show restaurants cards on the map
                        <div 
                            className={classes.markerContainer}
                            lat={Number(place.latitude)}
                            lng={Number(place.longitude)}
                            key={i}
                        >
                            {
                                !isDesktop ? (
                                    <LocationOnOutlinedIcon color="primary" fontSize="large" />
                                ): (
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                            {place.name}
                                        </Typography>
                                        <img className={classes.pointer} 
                                            src={place.photo ? place.photo.images.small.url : 
                                                "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"} 
                                            alt={place.name}  
                                        />
                                        <Rating size="small" value={Number(place.rating)} readOnly />
                                    </Paper>
                                )
                            }
                        </div>
                ))}
            

            </GoogleMapReact>
        </div>
    )
}

export default Maps;