let initialState = {
    login : false,
    username : null,
    password : null
};
let dataBase = {
    username : "farzad",
    password:"1377"
};
function login (state = initialState, action){
    switch (action.type) {
        case 'LOGIN' :
            if(action.username === dataBase.username && action.password === dataBase.password)
            {
                return {
                    username : action.username,
                    password : action.password,
                    login : true
                };
            }
            else
                return initialState;

        case 'LOGOUT':
            return initialState;
        default :
            return state
    }
}

export default login