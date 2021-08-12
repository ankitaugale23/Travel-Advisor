import react from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


import useStyles from "./styles";
const Header = ()=> {
    const classes = useStyles();
    return (
        <AppBar position="static"> {/*main navigation bar*/}
            <Toolbar className={classes.toolbar} > {/*Toolbar of App*/}
                <Typography variant="h5" className={classes.title}>
                        Travel Ready      {/*Name of the app*/}
                </Typography>
                <Box display="flex" >
                    <Typography variant="h6">
                        Explore new places     {/*Searchbar header of the app*/}
                    </Typography>
                    {/* <Autocomplete>                Search bar component */}
                        <div className={classes.search} >
                            <div className={classes.SearchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase 
                                placeholder="Search"
                                classes={{root: classes.inputRoot, input: classes.inputInput}}
                            />
                        </div>

                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;