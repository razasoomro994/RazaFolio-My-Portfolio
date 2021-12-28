import express from 'express'
import users from '../modal/user.js'

export const saveData =(req, res) =>{ 
   console.log(req.body)
   const obj = users.create(req.body)
   console.log(obj)
   res.json({id:1,msg:"message record"})
   }