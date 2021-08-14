import react, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import Maps from "./components/Maps/Maps";
import List from "./components/List/List";
import { getPlaces } from "./apis";

const App = () => {

    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({}); //state to hold co ordinates of the current place
    const [bounds, setBounds] = useState({}); //state to hold bounds which will be passed to make api request

    useEffect( ()=> {   //will execute only on first render

        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude }}) => {     //built in browser funtion
            setCoordinates({lat: latitude, lng: longitude});
            
        })
    },[] );

    useEffect(()=> {  //will run whenever either of coordinates and bounds states changes
        

        getPlaces(bounds.sw, bounds.ne).then( (data)=> {
            console.log(data);
            setPlaces(data);

        })
    }, [coordinates, bounds] );

    return (

         <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width : '100%' }}>

                <Grid item xs={12} md={4}>
                    <List 
                       
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <Maps 
                        setCoordinates={setCoordinates} //passing as props so states can be updated with the
                        setBounds = {setBounds} //real time data we get from maps api
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>
         </>
    )
}

export default App;