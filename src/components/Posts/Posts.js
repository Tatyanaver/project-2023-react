import React, {useEffect, useState} from 'react';
import {Post} from "../Post/Post";
import {postService} from "../../services/postService";

const Posts = ({setPostDetails}) => {
    const [posts,setPosts] = useState([])


    useEffect(()=> {
        postService.getAll().then(value => value.data).then(value => setPosts([...value]))
        },[])

    return (
        <div>

            {!!posts.length && posts.map(post=> <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}
        </div>
    );
};

export {Posts};