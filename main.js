import { getLatestStableVersion } from './latest-version-checker.js';
import { sendPushoverNotification } from './notify.js';
import { getLastCheckedVersion, saveLastCheckedVersion } from './localFile.js';

async function main() {
  try {
    const lastCheckedVersion = getLastCheckedVersion();
    console.log('main -> lastCheckedVersion', lastCheckedVersion);
    const latestVersion = await getLatestStableVersion('RT-AC68U');

    if (latestVersion !== lastCheckedVersion) {
      const message = `🔔 New firmware version ${latestVersion} is now available at

      https://www.asuswrt-merlin.net/`;
      console.log('sending notification...');
      sendPushoverNotification(message);
      saveLastCheckedVersion(latestVersion);
    } else {
      const message = `🤷‍♂️ No firmware released. ${latestVersion} is the latest.`;
      sendPushoverNotification(message);
    }
  } catch (error) {
    console.log('main -> error', error);
    const message = `⚠️ Router firmware update check failed`;
    sendPushoverNotification(message);
  }
}

main();
