import {useState, useEffect} from 'react';
import Post from './components/Post/Post.jsx';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Записи</h1>
            <ul>
                {data.map(post => (
                    <Post key={post.id} post={post}/>
                ))}
            </ul>
        </div>
    );
}

export default App;