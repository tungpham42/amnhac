import axios from "axios";

const searchCollection = async (query) => {
  const response = await axios.get(`https://api.discogs.com/database/search`, {
    params: {
      q: query,
      key: process.env.REACT_APP_DISCOGS_CONSUMER_KEY,
      secret: process.env.REACT_APP_DISCOGS_CONSUMER_SECRET,
    },
  });
  return response.data.results;
};
export default searchCollection;
