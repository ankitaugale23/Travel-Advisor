import react, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import Maps from "./components/Maps/Maps";
import List from "./components/List/List";
import { getPlaces } from "./apis";

const App = () => {

    const [places, setPlaces] = useState([]);
    const [filterPlaces, setFilterPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({}); //state to hold co ordinates of the current place
    const [bounds, setBounds] = useState({}); //state to hold bounds which will be passed to make api request
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");


    useEffect( ()=> {   //will execute only on first render

        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude }}) => {     //built in browser funtion
            setCoordinates({lat: latitude, lng: longitude});
            
        })
    },[] );

    useEffect( ()=> {
       const filteredPlaces =  places.filter((place)=> place.rating > rating )
       setFilterPlaces(filteredPlaces);
    },[rating])    //execute when rating is changed

    useEffect(()=> {  //will run whenever either of coordinates and bounds states changes
        
        setIsLoading(true);
        getPlaces(type, bounds.sw, bounds.ne).then( (data)=> {
            console.log(data);
            setPlaces(data);
            setIsLoading(false);
            setFilterPlaces([]);

        })
    }, [type,coordinates, bounds] );

    return (

         <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width : '100%' }}>

                <Grid item xs={12} md={4}>
                    <List 
                       places={filterPlaces.length ? filterPlaces : places}
                       childClicked={childClicked}
                       isLoading={isLoading}
                       type={type}
                       setType={setType}
                       rating={rating}
                       setRating={setRating}
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <Maps 
                        setCoordinates={setCoordinates} //passing as props so states can be updated with the
                        setBounds = {setBounds} //real time data we get from maps api
                        coordinates={coordinates}
                        places={filterPlaces.length ? filterPlaces : places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
         </>
    )
}

export default App;