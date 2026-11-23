
import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'
import { add, get, remove } from './utilities/utility';


function App() {
  const[blogs, setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data)
        })
    },[])

 const [bookmark, setBookmark] = useState([]);
  //   const handleBookmark=(blog)=>{
  //   setBookmark([...bookmark,blog])
  //   add(blog.id)
  // }
  const handleBookmark = (blog) => {
  if (bookmark.some(b => b.id === blog.id)) return;
  setBookmark([...bookmark, blog]);
  add(blog.id);
};
console.log(bookmark.map(b => b.id))

  //console.log(blogs)
  // useEffect(()=>{
  //   const booksid=get();
  //   let books=[]
  //   for(let i of booksid){
  //     const book=blogs.find(blog=>blog.id===i);
  //     books.push(book);
  //   }
  //   console.log(bookmark)
  //   setBookmark(books)
  // },[blogs])
  useEffect(() => {
  // if (blogs.length === 0) return;

  const bookIds = get();
  const books = [];
  for (const id of bookIds) {
    const book = blogs.find(blog => blog.id === id);
    if (book) books.push(book);
  }
  setBookmark(books);
}, [blogs]);

//remove item
const removeBook=(id)=>{
  remove(id);

  const newBook=bookmark.filter(book=> book.id!==id);
  setBookmark(newBook);
  setCount(count+1)
}
//count read
const[count, setCount]=useState(0);

//read book
const readBook=(item)=>{

}


  

  console.log(bookmark)
  return (
    <>
      <Navbar totalBook={bookmark}></Navbar>
     
     <div className="main-container flex text-center">
      <div className="left-container w-[65%]">
           <Blogs blogs={blogs} handleBookmark={handleBookmark} removeBook={removeBook}></Blogs>
      </div>
      <div className="right-container w-[35%]">
         <h2>Reading books: {count}</h2>
         <h2>Bookmark: {bookmark.length}</h2>
         {
  bookmark.map(item => (
    <div key={item.id}>
      <p>{item.title}</p>
      
    </div>
  ))
}
         
      </div>
     </div>
    </>
  )
}

export default App
