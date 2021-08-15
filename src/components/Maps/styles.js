import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '10px', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: '90vh', width: '205%', marginTop: '10px',
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer', width:'80px', height:'50px'
  },
}));
