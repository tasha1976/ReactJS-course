import { useContext } from 'react';
import { UserContext } from '../App';
import UserDetail from './UserDetail';

const UserProfile = () => {
    const user = useContext(UserContext);

    return (
        <div>
            <h1>{user.name}'s Profile</h1>
            <UserDetail />
        </div>
    );
};

export default UserProfile;