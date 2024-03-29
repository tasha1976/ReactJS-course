import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Counter } from './components/Counter.jsx';

const App = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};

export default App;