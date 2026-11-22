import React from 'react';
import { CiBookmarkPlus } from "react-icons/ci";
import { add } from '../../utilities/utility';

const Blog = ({blog, handleBookmark}) => {
    const{title,placeimg,author,authorimg,place,story,tags,id}=blog;
    //console.log(blog)
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
  <figure>
    <img 
      src={placeimg}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    {/* author details */}
    <div className="author flex justify-around items-center">
      <h2 className="card-title">Author: {author}</h2>
      <img className='w-10 h-10' src={authorimg} alt="" />
      <button onClick={() => handleBookmark(blog)} className='cursor-pointer'><CiBookmarkPlus size={26}/></button>
    </div>
    <p>{title}</p>
    <small>{place}</small>
    <ul className='flex justify-around'>
      {
        tags.map((name,index)=><li key={index}>{name}</li>)
      }
    </ul>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;