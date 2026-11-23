import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blogs, handleBookmark, removeBook}) => {
    // const[blogs, setBlogs]=useState([]);
    // useEffect(()=>{
    //     fetch('blogs.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setBlogs(data)
    //     receiveBlogs(blogs)
    //     })
    // },[])
    

    console.log(blogs);

    return (
        <div>
            <h1 className='text-3xl'>Available Blogs: {blogs.length}</h1>
            <div className="all-blog grid lg:grid-cols-2 gap-2">
                {
                    blogs.map(blog=> <Blog 
                        key={blog.id} blog={blog} handleBookmark={handleBookmark} removeBook={removeBook}></Blog>) 
                }
            </div>
        </div>
    );
};

export default Blogs
