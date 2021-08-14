import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlaces = async (sw,ne) => {
    try {
        const {data: {data}} = await axios.get(URL, {
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