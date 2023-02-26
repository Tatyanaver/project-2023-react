import React from 'react';
import {axiosService} from "./axiosService";

const postService = {
    getAll:()=>axiosService.get('/posts'),
    // getById:(id)=>axiosService.get(`/posts/${id}`)
    getByUserId: (id)=> axiosService.get(`/posts/?userId=${id}`)
};

export {postService};