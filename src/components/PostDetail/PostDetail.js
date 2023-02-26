import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";

const PostDetail = ({id}) => {
    const [post,setPost] = useState(null);

    useEffect(()=>{
        postService.getByUserId(id).then(value => value.data).then(value => setPost(value)
    )},[id])
    return (
        <div>
            Post Details
            {id && <div>(JSON.stringify(post)</div> }
        </div>
    );
};

export {PostDetail};

