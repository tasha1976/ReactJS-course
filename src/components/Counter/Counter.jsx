import {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);
    const handleResetCounter = () => setCount(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleResetCounter}>Reset</button>
        </div>
    );
}

export default Counter;