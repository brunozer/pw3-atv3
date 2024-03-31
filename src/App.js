import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CriarPost from './components/CriarPost';
import Post from './components/Post';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const criarPost = (title, body) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: title,
      body: body,
      userId: 1
    })
      .then(response => {
        setPosts(posts => [...posts, response.data]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const deletarPost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setPosts(posts => posts.filter(post => post.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  const atualizarPost = (id, title, body) => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      id: id,
      title: title,
      body: body,
      userId: 1
    })
      .then(response => {
        setPosts(posts => posts.map(post => post.id === id ? response.data : post));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="App"> 
      <h3>Posts</h3>
      <CriarPost criarPost={criarPost} />
      <div className="PostList"> 
        {posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            deletarPost={deletarPost}
            atualizarPost={atualizarPost}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
