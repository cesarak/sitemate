import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/',
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error(
      `API return error code: ${
        error.response.status ? error.response.status : 'null'
      }`,
    );
    console.error(
      `API return error response: ${JSON.stringify(error.response)}`,
    );
    let requestConfig = error.config;
    requestConfig.data = error.response.data;
    return axios(requestConfig);
  },
);

export default api;
