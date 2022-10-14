import React, { useEffect } from 'react'
import "./CreatePost.css";
import {addDoc, collection}from 'firebase/firestore'
import {useState} from 'react';
import { async } from '@firebase/util';
import { db,auth } from '../fireBase-config';
import{useNavigate} from 'react-router-dom';



function CreatePost({isAuth}) {
    const [title,setTitle]=useState("")
    const [blogText,setBlogText]=useState("")
    
    const blogsCollectionRef= collection(db,"blogs")

    let navigate=useNavigate();


    const createPost=async ()=>{
       await addDoc(blogsCollectionRef, {title,blogText,author:{name: auth.currentUser.displayName , id: auth.currentUser.uid }
    });
    navigate("/newblog")
    };

    useEffect(()=>{
    if(!isAuth){
        navigate("/login")
    }
    },[]);



  return (
    <div className='createpostpage'>
       
        <div className='createpostone'>
           <h2>CREATE A NEW BLOG</h2>
           <div className='inputgroup'>
            <label> Title:</label>
            <input type="text" placeholder='Title...' onChange={(event)=>{
             setTitle(event.target.value);
            }} />
             </div>
           <div className='inputgroup'> 
           <label> Blog:</label>
           <textarea placeholder="Add Blog" onChange={(event)=>{
             setBlogText(event.target.value);
            }} />
           </div>
             <button onClick={createPost}>Submit</button>
              
        </div>
    </div>
  )
}

export default CreatePost