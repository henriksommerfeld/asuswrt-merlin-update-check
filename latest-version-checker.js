import rp from 'request-promise';
import $ from 'cheerio';

export async function getLatestStableVersion() {
  try {
    const html = await rp('https://www.asuswrt-merlin.net/');
    const stableVersion = $('table tbody tr', html)
      .first()
      .text()
      .split('\n')[1]
      .trim();
    return stableVersion;
  } catch (error) {
    Promise.reject(error);
  }
}
