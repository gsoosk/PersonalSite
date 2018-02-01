export function login(user, pass) {
    return {
        type : 'LOGIN',
        username : user,
        password:pass
    }
}
export function logout() {
    {
        return {
            type:'LOGOUT'
        }
    }
}

