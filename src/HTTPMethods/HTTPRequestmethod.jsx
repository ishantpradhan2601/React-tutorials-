import React, { useState } from 'react';

const HTTPRequestmethod = () => {
  const [posts, setPosts] = useState([]);
  const [resMessage, setResMessage] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [display, setDisplay] = useState(false);

  // GET method
  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setDisplay(display => !display);
        setErrMessage('');
      })
      .catch(err => setErrMessage('Failed to fetch posts'));
  };

  // POST method
  const createPost = () => {
    const newPost = {
      title: 'New Post Title',
      body: 'This is a new post.',
      userId: 1
    };

    // PUT method
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(data => {
        setResMessage(`Post Created with ID: ${data.id}`);
        setErrMessage('');
      })
      .catch(err => setErrMessage('Error creating post'));
  };
  const updatePost = () => {
    const updatedPost = {
      id: 1,
      title: "Updated Title",
      body: "Updated Body Content",
      userId: 1,
    };

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost)
    })
      .then(res => res.json())
      .then(data => {
        setResMessage(`POST with ID 1 updated successfully`);
        setErrMessage('');
      })
      .catch(() => setErrMessage('Error updating post'));
  };

  //Delete method 
const deletePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: "DELETE",
    })
      .then(() => {
        setResMessage("POST with ID 1 deleted successfully");
        setErrMessage('');
      })
      .catch(() => setErrMessage('Error deleting post'));
  };
  return (
    <div>
      <button onClick={fetchPosts}>Fetch Posts (GET)</button>
      <button onClick={createPost}>Create Post (POST)</button>
      <button onClick={updatePost}>Update Post (PUT)</button>
      <button onClick={deletePost}>Delete Post (DELETE)</button>

      <h3 style={{ color: "green" }}>{resMessage}</h3>
      <h3 style={{ color: "red" }}>{errMessage}</h3>

      {display && (
        <ul>
          {posts.map((item) => (
            <li key={item.id} style={{ marginBottom: 10 }}>
              ID: {item.id} <br />
              Title: {item.title} <br />
              User ID: {item.userId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HTTPRequestmethod;
