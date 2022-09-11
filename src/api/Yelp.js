import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer s3fofCHkpIkEdrZeVECRdSsvfsiULPwvXgqipRZ5faMHhuxBn4CRtSvvdGKlCIdPlsxKXw_8xwo4OmO4z5m8-Vox1YCCYUh0wfToNKgMKSCH1CTrUBI9ix45d54YY3Yx",
  },
});
