import React from 'react';

const Post = ({post,setPostDetails}) => {
    const {id, title} = post
    return (
        <div>
            <div>id:{id};</div>
            <div>title: {title}</div>


            <button onClick={()=>setPostDetails(post)}>get post details</button>

        </div>
    );
};

export {Post};