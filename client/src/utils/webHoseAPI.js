import axios from "axios";
const BASEURL = "http://webhose.io/filterWebContent?";
const FILTER = "&sort=relevancy&q=language%3Aenglish";
const APIKEY = "&token=a5cd9f56-4829-4d72-aed5-72af9e38b4b2&format=json";
export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query + FILTER);
  }
};