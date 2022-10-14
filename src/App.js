
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router,Link, Route, Routes } from "react-router-dom";
import Blogs from './components/Header/Cards/Blogs';
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';
import BlogCard from './components/Header/BlogCards/BlogCard';
import Footer from './components/Header/Footer/Footer';
import CreatePost from './components/Header/Post/CreatePost';
import Login from './components/Header/Login/Login';
import {signOut} from 'firebase/auth'

import {auth}from './components/Header/fireBase-config'
import NewBlog from './components/Header/Newblogs/NewBlog';
// import Slider from './components/Header/Slider/Slider';

function App() {
   const [isAuth,setIsAuth]= useState(false); 

   const signUserOut=()=>{
        signOut(auth).then(()=>{
          localStorage.clear()
          setIsAuth(false)
          window.location.pathname="/login";
        
        })
   }

  return (
    <>
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/newBlogs">New Blogs</Link>
        {!isAuth ? (
        <Link to="/login">Login</Link>
         ) : (
          <>
          <Link to="/createpost">Create Post</Link>
          
        <button className='logout-btn' onClick={signUserOut}>Log Out</button>
          </>
           )}
      </nav>
      {/* <Header /> */}
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/blog/:_id' element={<BlogCard />} />
            <Route path='/' element={<Blogs />} />    
            <Route path='/NewBlogs' element={<NewBlog  isAuth={isAuth}/>} />   
            <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>} />
            <Route path='/login' element={<Login  setIsAuth={setIsAuth}/>} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  </>
  );
}

export default App;
