import mongoose from 'mongoose'; 

const YourSchema = new mongoose.Schema({
  username: {type:String, unique:true},
  password: String,
}, {timestamps: true});

export const YourModel = mongoose.model('Your', YourSchema); 

 