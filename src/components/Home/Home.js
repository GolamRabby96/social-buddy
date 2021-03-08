import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
      const [post, setpost] = useState([])
      useEffect(() => {
            const url = "https://jsonplaceholder.typicode.com/posts";
            fetch(url)
            .then( res => res.json() )
            .then( data => setpost(data) )
      }, [])
      return (
            <div>
                  <h1>This is home from react js</h1>
                  {
                        post.map( pt => <Post post={pt}></Post>)
                  }
            </div>
      );
};

export default Home;