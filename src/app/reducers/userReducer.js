const userReducer = (state = {
    name:"Ashish",
    age:29
}, action) => {
    debugger;
    switch (action.type) {        
        case "SET_NAME_FULFILLED":
            state = {
                //...state,
                name: action.payload
            };              
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };            
            break;
    
        default:
            break;
    }
    return state;
}

export default userReducer;