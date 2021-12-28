 import axios from "axios";

 
const url= "http://localhost:2222/"

export const fetchuser = (obj) => axios.post(url+'user',obj);
