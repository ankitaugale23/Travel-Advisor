import axios from "axios";



export const getPlaces = async (type,sw,ne) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            url: URL,
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng
            },
            headers: {
              'x-rapidapi-key': 'dafe1b158cmshf87963a25f8051fp186722jsnaec6926a5f41',
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
          } );
        return data;
    }
    catch(error) {
        console.log(error);
    }
}

export const getWeatherData = async (lat,lng) => {
  try{
        const {data} = await axios.get("https://community-open-weather-map.p.rapidapi.com/find", {
        params: {
          
          lon: lng,
          lat: lat,
        },
        headers: {
          'x-rapidapi-key': 'dafe1b158cmshf87963a25f8051fp186722jsnaec6926a5f41',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
       })
       return data;
      }
  catch(error)
    {
      console.log(error);
    }
  
}