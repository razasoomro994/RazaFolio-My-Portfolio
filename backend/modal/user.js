 import mongoose from 'mongoose'
 const Schema = mongoose.Schema;

 let saveData = new Schema({
   name:{
   type: String
   },
    email:{
        type: String  
    },
    subject:{
        type: String
    },
    message:{
        type: String
    },

}  
   , {
        collection: 'user'

 })
//  module.exports = mongoose.model('user', saveData); 

 export default saveData = mongoose.model('user',saveData)
