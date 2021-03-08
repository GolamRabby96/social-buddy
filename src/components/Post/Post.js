import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    console.log(props.post)
    const {id, title} = props.post;
    
    const history = useHistory();
    const showComments = id => {
        const url = `post/${id}`;
        history.push(url)
    }
    return (
        <div>
            <h1>{id}:- {title}</h1>
            <button onClick={()=> showComments(id)}>Click me</button>
        </div>
    );
};

export default Post;