import express from 'express'
import cors from 'cors'
const app = express();
const PORT = 2222;

import UsObj from './route/user.js'
import mongoose from 'mongoose'

import config from '../backend/config/db.js'
console.log(config)

mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
  ()=>{console.log('Database is Connected')},
  err => {console.log('cen Not connect to the database'+err)}
);


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());





app.use('/user',UsObj)



app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
  });