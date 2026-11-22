
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
     
     <div className="main-container flex text-center">
      <div className="left-container w-[65%]">
           <Blogs></Blogs>
      </div>
      <div className="right-container w-[35%]">
         <h2>Reading time: 0</h2>
         <h2>Bookmark: 0</h2>
      </div>
     </div>
    </>
  )
}

export default App
