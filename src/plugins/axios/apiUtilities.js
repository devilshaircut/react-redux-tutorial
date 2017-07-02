import axios from 'axios';

export const BASE_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};


/**
 * @function getHeaders
 * @description Returns headers for API requests
 * @returns {{
 *   headers: {
 *     Accept: string,
 *     Content-Type: string
 *   }
 * }}
 */
export const getHeaders = () => {
  const headers = BASE_HEADERS;
  const access_token = '123456789';
  if (access_token) {
    headers.Authorization = access_token;
  }
  return { headers };
};

export const BASE_URL = process.env.API_BASE;

const baseError = {
  name: 'BaseError',
  message: 'Something went wrong. Please refresh and try again.',
  status: 500,
};

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 4000,
});


/**
 * @function handleError
 * @description Handles errors correctly
 * @param e
 */
export const handleError = (e) => {
  const error = e && e.response ?
    e.response.data :
    baseError;
  const message = error.message || 'Something went wrong. Please refresh your page.';
  alert(message); // eslint-disable-line no-alert
  throw error;
};


/**
 * @function get
 * @description Places GET requests to path
 * @param path
 */
export const get = path =>
  axiosInstance.get(path, getHeaders())
    .then(response => response.data)
    .catch(handleError);


/**
 * @function post
 * @description Places POST requests to path with data as body
 * @param path
 * @param data
 */
export const post = (path, data) =>
    axiosInstance.post(path, data, getHeaders())
      .then(response => response.data)
      .catch(handleError);


/**
 * @function patch
 * @description Places PATCH requests to path with data as body
 * @param path
 * @param data
 */
export const patch = (path, data) =>
  axiosInstance.patch(path, data, getHeaders())
    .then(response => response.data)
    .catch(handleError);


/**
 * @function del
 * @description Places DELETE requests to path
 * @param path
 */
export const del = path =>
  axiosInstance.delete(path, getHeaders())
    .then(response => response.data)
    .catch(handleError);














