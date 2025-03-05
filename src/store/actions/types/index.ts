export interface User {
    id: number;
    name: string;
    username: string;
}

export enum FetchUsersActions {
    START_FETCH_USERS = 'START_FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export const startFetchUsers = () => {
    return { type: FetchUsersActions.START_FETCH_USERS } as FetchUsersType;
}

export const fetchUsersSuccess = (users: User[]) => {
    return { type: FetchUsersActions.FETCH_USERS_SUCCESS, payload: users } as FetchUsersSuccessType;
}

export const fetchUsersError = (error: string) => {
    return { type: FetchUsersActions.FETCH_USERS_ERROR, payload: error } as FetchUsersErrorType;
}

interface FetchUsersType {
    type: FetchUsersActions.START_FETCH_USERS;
}

interface FetchUsersSuccessType {
    type: FetchUsersActions.FETCH_USERS_SUCCESS;
    payload: User[];
}

interface FetchUsersErrorType {
    type: FetchUsersActions.FETCH_USERS_ERROR;
    payload: string;
}

export type FetchUsersActionsType =
    | FetchUsersType
    | FetchUsersSuccessType
    | FetchUsersErrorType;