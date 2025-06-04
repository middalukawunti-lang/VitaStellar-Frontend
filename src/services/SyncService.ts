import localforage from 'localforage';
import axios from 'axios';

export interface MedicalRecord {
  patientName: string;
  diagnosis: string;
  treatment: string;
  date: string;
  txHash: string;
  filePath?: string;
  createdBy: string;
}

const RECORDS_KEY = 'offline-records';

export const saveRecordOffline = async (record: MedicalRecord) => {
  const existing = (await localforage.getItem<MedicalRecord[]>(RECORDS_KEY)) || [];
  await localforage.setItem(RECORDS_KEY, [...existing, record]);
};

export const syncRecords = async () => {
  const records = (await localforage.getItem<MedicalRecord[]>(RECORDS_KEY)) || [];

  if (records.length === 0) return;

  try {
    const response = await axios.post('/api/sync', records);
    const { synced } = response.data;

    const remaining = records.filter((r) => !synced.includes(r.txHash));
    await localforage.setItem(RECORDS_KEY, remaining);

    console.log('Synced records:', synced.length);
  } catch (error) {
    console.error('Sync failed:', error);
  }
};
