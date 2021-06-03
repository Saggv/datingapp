import { createAsyncThunk } from '@reduxjs/toolkit';
import {firestore} from '../../firebase/config';

export const getRoomChat = createAsyncThunk('message/getRoomChat', async (id) => {
  const listRooms = [];
  const result = [];
  const resThreads = await firestore.collection('THREADS').get();

  await resThreads.forEach((docs) => {
    listRooms.push({ ...docs.data(), id: docs.id });
  });

  listRooms.forEach((room) => {
    if (room.targetId === id || room.fromId === id) {
      return result.push(room);
    }
  });
  return result;
});
