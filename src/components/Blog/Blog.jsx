import React from 'react';

const Blog = ({blog}) => {
    const{title,placeimg,author}=blog;
    //console.log(blog.author)
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
  <figure>
    <img 
      src={placeimg}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{author}</h2>
    <p>{title}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;