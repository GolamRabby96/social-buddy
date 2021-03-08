import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then( res => res.json() )
        .then( data => setPost(data))
    }, []);

    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then( res=> res.json() )
        .then( data => setComments(data))
    },[]);

    return (
        <div>
            <h1>this is post details {id}</h1>
            <hr/>
            <p>user post {post.id}</p>
            <hr/>
            <p>{post.title}</p>
            <hr/>
            <h5>numbers of comments {comments.length}</h5>
            <hr/>
            {
                comments.map( cm => <Comment comment={cm}></Comment>)
            }
            <hr/>
        </div>
    );
};

export default PostDetail;