import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment;
    return (
        <div>
            <h1>{name}: {email}</h1>
            <hr/>
        </div>
    );
};

export default Comment;