import axios from "axios";
const BASEURL = "http://webhose.io/filterWebContent?" + token + "&format=json&sort=relevancy&q=language%3Aenglish";
const APIKEY = "&token=a5cd9f56-4829-4d72-aed5-72af9e38b4b2";
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};