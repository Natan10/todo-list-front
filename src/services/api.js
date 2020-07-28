import axios from 'axios';
import * as storage from './localStorage';

const api = axios.create({
  baseURL: 'http://localhost:4000/api/',
  mode: 'no-cors',
});


api.interceptors.request.use(config => {
  const token = storage.getAccessToken();
  if (token) {
    config.headers['access-token'] = token;
    config.headers.uid = storage.getUid();
    config.headers.client = storage.getClient();
  }
  return config;
});

api.interceptors.response.use((res)=>{
  if(res.headers['access-token'] !== storage.getAccessToken() && res.headers['access-token'] !== ''){
    storage.setAccessToken(res.headers['access-token'])
    storage.setClient(res.headers.client)
    storage.setUid(res.headers.uid)
  }
  return res
},(err)=>{
  return Promise.reject(err)
});

export default api;