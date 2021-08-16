import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";



import useStyles from "./styles";
const Header = ({setCoordinates})=> {
    const classes = useStyles();
    // const [autocomplete, setAutoComplete] = useState(null);

    // const onLoad= (autoC) => {setAutoComplete(autoC)}; 

    // const onPlaceChanged = () => {
    //     const lat=autocomplete.getPlace().geometry.location.lat();
    //     const lng = autocomplete.getPlace().geometry.location.lng();
    //     setCoordinates({lat, lng});
    // }

    
    return (
        
        <AppBar position="static"> {/*main navigation bar*/}
            <Toolbar className={classes.toolbar} > {/*Toolbar of App*/}
            
                <Typography variant="h5" className={classes.title}>
                        Travel Ready      {/*Name of the app*/}
                </Typography>
                <Box display="flex" >
                    <Typography variant="h6" className={classes.title}>
                        Explore new places     {/*Searchbar header of the app*/}
                    </Typography>
                      {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>             
                        <div className={classes.search} >
                            <div className={classes.SearchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase 
                                placeholder="Search"
                                classes={{root: classes.inputRoot, input: classes.inputInput}}
                            />
                            
                         </div>
                    </Autocomplete>  */}
                </Box>
            </Toolbar>
        </AppBar>
        
    )
}

export default Header;