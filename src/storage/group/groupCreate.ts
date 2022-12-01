import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';

import { groupGetAll } from './groupGetAll';

export async function groupCreate(groupName: string) {
  try {
    const storedGroups = await groupGetAll();
    const storage = JSON.stringify([...storedGroups, groupName]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
