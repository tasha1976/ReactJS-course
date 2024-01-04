import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<UsersList />} />
                <Route path='/user/:userId' element={<UserDetails />} />
            </Routes>
        </Router>
    );
}

export default App;