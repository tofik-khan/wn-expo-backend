import { model } from 'mongoose';

import './db';

const Admins = model('admin');


export async function main(args) {
  try {
      const admins = await Admins.find();
      console.log(admins)
      
  }catch (err) {
      console.log(err);
      return{
          statusCode: 500,
          body: err.message
      }
  }
}