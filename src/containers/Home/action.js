import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {firestore} from '../../firebase/config';


export const getData = createAsyncThunk(
  'home/fetchData',
  async()=>{
    console.log('ssdds');
    let result = [];
    const res = await firestore.collection('users');
   let test =  await  res.onSnapshot((querySnapshot) =>{
      const users = querySnapshot.docs.map((documentSnapshot) => {
        let a = {
          _id: documentSnapshot.id,
          ...documentSnapshot.data(),
        };
        result.push(a);
      });
       return result;
    });

    console.log(result);

    return res;
  }
);


export const handlerLike = createAsyncThunk(
  'home/handleLike',
  async() =>{

  }
);


export const sendNotification = createAsyncThunk(
  'home/sendNotification', 
  async(notification) =>{

      await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        to: notification.token,
        sound: "default",
        title: notification.title,
        body: notification.message
      })
    });
  }
)
