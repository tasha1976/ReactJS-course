import { useContext } from 'react';
import { UserContext } from '../App';

const UserDetail = () => {
    const user = useContext(UserContext);

    if (!user) {
        return <div>Loading user data...</div>;
    }

    return (
        <div>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetail;