import rp from 'request-promise';
import $ from 'cheerio';

export async function getLatestStableVersion() {
  try {
    const html = await rp('https://www.asuswrt-merlin.net/');
    const text = $('#block-currentrelease', html).text();
    const rows = text.split('\n');
    const stableOthers = rows.find(r => r.startsWith('Others:'));
    const stableVersion = stableOthers.split('Others:')[1].trim();
    return stableVersion;
  }
  catch (error) {
    Promise.reject(error);
  }
}