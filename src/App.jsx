import {useState, useEffect} from 'react';
import Post from './components/Post/Post.jsx';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error:', error));
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