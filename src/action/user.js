import { FETCHUSER,} from '../constant/user.js';
  import * as api from '../api/user.js'
  //function for login user
  export const UserSave = (obj) => async (dispatch) => {
      try {  
        const { data } = await api.fetchuser(obj);
        //console.log(data,'here')
        dispatch({ type: FETCHUSER, payload: data });
      } catch (error) {
        console.log(error.message);
      }
    }
