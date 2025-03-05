import { ThunkAction } from 'redux-thunk';
import {AppDispatch, RootState} from '../index.ts';
import {FetchUsersActionsType, fetchUsersError, fetchUsersSuccess, startFetchUsers } from './types';
import {getUsers} from "../../api";

export const fetchUsers = (): ThunkAction<Promise<void>, RootState, unknown, FetchUsersActionsType> => {
    return async (dispatch: AppDispatch): Promise<void> => {
        dispatch(startFetchUsers())

        const timerId = setTimeout(() => {
            throw new Error('timeout');
        }, 5000);

        try {
            const users = await getUsers();
            clearTimeout(timerId);
            dispatch(fetchUsersSuccess(users));
        } catch (e: any) {
            console.log(e)
            dispatch(fetchUsersError(e.message));
        }
    };
};