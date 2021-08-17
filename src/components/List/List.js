import { createRef, useEffect, useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

import useStyles from "./styles";
import PlaceDetail from "../PlaceDeatils/PlaceDetail";

const List = ({places,childClicked,isLoading,setType,setRating,type,rating})=> {
   
    const classes =  useStyles();
    
    const [eleRefs, setEleRefs] = useState([]);

    useEffect( ()=> {
        const refs = Array(places?.length).fill().map((_,i)=> eleRefs[i] || createRef());  //create as many refernces as there are places.
        setEleRefs(refs);
    }, [places]);

    return <div className={classes.container}>
        <Typography variant="h5">Restaurants, Hotels and Attractions around you</Typography>
        { isLoading ? (
            <div className={classes.loading}>
                <CircularProgress size="5rem"/>
            </div>
        ) : ( 
         <>

        <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e)=> { setType(e.target.value)}}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}> 
             <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e)=> { setRating(e.target.value)}}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3</MenuItem>
                <MenuItem value={4}>Above 4</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
        </FormControl>
        <Grid className={classes.list} container spacing={3}>
            {places?.map((place, i) => (
                <Grid ref={eleRefs[i]} item key={i} xs={12}> {/*ref prop is imp to implement the scrolling functionality*/}
                    <PlaceDetail 
                        place={place} 
                        selected={Number(childClicked) ===  i} 
                        refProp={eleRefs[i]}  //pass the ref of the selected place to placedetail to load it in the list
                    />
                    </Grid>
            ))}
        </Grid> 
        </>
        )}
        

    </div>
}

export default List;