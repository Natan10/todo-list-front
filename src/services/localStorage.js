const getAccessToken = () => localStorage.getItem('access-token');
const getClient = () => localStorage.getItem('client');
const getUid = () => localStorage.getItem('uid');

const setAccessToken = token => localStorage.setItem('access-token',token);
const setClient = client => localStorage.setItem('client',client);
const setUid = uid => localStorage.setItem('uid',uid);

export {
  getAccessToken,
  getClient,
  getUid,
  setAccessToken,
  setClient,
  setUid
}