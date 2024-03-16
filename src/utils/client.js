// calls all apis
import axios from "axios";

import { apiBaseUrl } from "../constants/global";

const TYPE_JSON = "application/json";

export const buildAPIInstance = ({ contenttype = TYPE_JSON }) => {
  // wait for valid base url

  const objAxios = axios.create({
    baseURL: apiBaseUrl,
    headers: {
      common: {
        Accept: TYPE_JSON,
        "Content-Type": contenttype,
      },
      post: {
        "Content-Type": TYPE_JSON,
      },
    },
  });

  return objAxios;
};

const client = (params = {}) => buildAPIInstance(params);

export default client;
