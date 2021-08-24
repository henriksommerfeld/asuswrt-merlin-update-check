import axios from 'axios';

export async function getLatestStableVersion(router) {
  try {
    const rows = await axios
      .get('https://fwupdate.asuswrt-merlin.net/manifest.txt', {
        responseType: 'text',
      })
      .then(x => x.data);
    return rows
      .split('/\r?\n/')
      .find(r => r.includes(router))
      .split('#')[1]
      .substr(2);
  } catch (error) {
    Promise.reject(error);
  }
}
