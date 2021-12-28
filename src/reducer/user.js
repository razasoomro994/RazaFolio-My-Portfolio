let UserReducer =(state = {}, action)=>{
    switch(action.type) {
        case 'FETCHUSER':
            return({
                ...state,
                user:action.payload
            })
            default: 
            return state ;
    }
}

export default UserReducer 