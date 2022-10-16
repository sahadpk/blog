import React, { useEffect, useState } from 'react'
import{getDocs,collection, deleteDoc,doc} from 'firebase/firestore'
import {auth,db}from '../fireBase-config'
import  "./newblog.css";
import { async } from '@firebase/util';
import { updateCurrentUser } from 'firebase/auth';
function NewBlog({isAuth}) {
    const [blogLists,setBlogList]=useState([]);
    const blogsCollectionRef= collection(db,"blogs")


    useEffect(() => {
      const getPosts=async()=>{
        const data= await getDocs(blogsCollectionRef);
        setBlogList(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
       };

       getPosts()
    }, [])
    

     const deleteBlog = async(id)=>{
        const blogDoc=doc(db,"posts",id)
        await deleteDoc(blogDoc)
     }

  return (
    <div className='newblog'>
        {blogLists.map((post)=>{
          return <div className='blogsec'>
            <div className='blogheader'>
                <div className='title'>
                    <h1>{post.title}</h1>
                </div>
                <div className='deleteblog'>
                  <button onClick={()=>{deleteBlog(post.id)
                }}> X</button>
                </div>
            </div>
             <div className='blogText'>
               {post.blogText}
            </div>
            {/* <h4>{post.author.name}</h4> */}
          </div>
        })}
    </div>
  )
}

export default NewBlog