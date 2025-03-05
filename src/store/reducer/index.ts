import {FetchUsersActions, FetchUsersActionsType, User} from "../actions/types";
import { combineReducers } from "redux";

export interface InitFetchUsersStateInterface {
    isLoading: boolean;
    users: User[];
    error: string | null;
}

const initFetchUsersState: InitFetchUsersStateInterface = {
    isLoading: false,
    users: [],
    error: null,
};

export const fetchUsersReducer = (
    state: InitFetchUsersStateInterface = initFetchUsersState,
    action: FetchUsersActionsType
): InitFetchUsersStateInterface => {
    switch (action.type) {
        case FetchUsersActions.START_FETCH_USERS:
            return {
                ...state,
                error: null,
                isLoading: true,
            };
        case FetchUsersActions.FETCH_USERS_SUCCESS:
            return {
                isLoading: false,
                users: action.payload,
                error: null,
            };
        case FetchUsersActions.FETCH_USERS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default combineReducers({
    fetchUsers: fetchUsersReducer,
});