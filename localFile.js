import { existsSync, readFileSync, writeFileSync } from 'fs';

const savedVersionFilePath = './last-checked-version.txt'

export function getLastCheckedVersion() {
  if (!existsSync(savedVersionFilePath)) {
    return "0.0"
  }
  
  const lastCheckedVersion = readFileSync(savedVersionFilePath, 'utf8');
  return lastCheckedVersion;
}

export function saveLastCheckedVersion(version) {
  writeFileSync(savedVersionFilePath, version);
}