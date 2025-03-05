import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../index.ts";
import {fetchUsers} from "../actions";

export default function UserList() {
    const {isLoading, users, error} = useSelector((state: RootState) => state.fetchUsers)
    const dispatch: AppDispatch = useDispatch();
    const handleOnClick = async () => {
        await dispatch(fetchUsers())
    }

    console.log(error)
    return (
        <>
            <button onClick={handleOnClick}>Load Users</button>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading</div>}
            <ul>
                {users.map(user => {
                        return (<li key={user.id}>{user.name}</li>)
                })}
            </ul>

        </>
    )
}