import { UserService } from "../../services/userService";

export function loadUser() {
    return (dispatch) => {
        const newUser = UserService.getUser()
        console.log(newUser);
        dispatch({type:'SET_USER',newUser}) 
        return newUser
    }
}

export function addUser(user) {
    return (dispatch) => {
        console.log(user);
        const newUser = UserService.signup(user)
        dispatch({type:'SAVE_USER',newUser})
    }
}

export function addMove(contact, amount){
    return (dispatch) => {
        const newUser = UserService.addMove(contact, amount)
        dispatch({type: 'SAVE_USER', newUser})
    }
}
