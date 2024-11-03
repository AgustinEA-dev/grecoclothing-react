import { USER_ACTION_TYPES } from "./user.types"

const INITIAL_STATE = {
    currentUser: null,
}

//actions are passed to every single reducer, that means that every reducer must return state so the reducer knows that none of the cases match to the type.

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload }
        default:
            return state
    }
}