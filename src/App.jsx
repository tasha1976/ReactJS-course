import { createContext } from 'react';
import UserProfile from './components/UserProfile';

export const UserContext = createContext(null);

const App = () => {
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
    };

    return (
        <UserContext.Provider value={user}>
            <UserProfile />
        </UserContext.Provider>
    );
};

export default App;