import { httpService } from "./httpService"

export const userService = {
    // signup,
    login
}

// function signup(name){
//     const user = {};
    
// }


async function login(){
    try {
        const users = await httpService.get('users')
        return users
    } catch (err) {
        throw err
    }
}


