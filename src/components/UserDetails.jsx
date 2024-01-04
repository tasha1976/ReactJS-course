import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
    const [user, setUser] = useState(null);
    const { userId } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserDetails;
