import React, { useEffect, useState } from "react";
import {ListGroup,Image,Row,Col} from "react-bootstrap";
import axios from "axios";
import {useParams,useLocation} from 'react-router-dom'


function BlogCard(props) {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState([]);
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;
  const {_id} =useParams()
  useEffect(() => {
    getBlogs();
  }, [blog]);
  const getBlogs = async () => {
    try {
      const { data } = await axios.get(
        `https://newsonic-backend.herokuapp.com/api/posts/fetch-home`
      );
      console.log("first", data.posts);
      setBlogs(data.posts);
      const datas =blogs.filter(item=>{
        return item._id=== _id
      })
      setBlog(datas[0])
      console.log("datas",datas[0].newsBody)
  
    } catch (error) {}
  };
  return (
    <>
    {blog ?(<Row>
            <Col md={6}>
              <Image src={imageUrl} alt={blog._id} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h4 style={{color:"red"}}>{_id}</h4>
                  <h6 style={{color:"blue"}}>{blog.newsHead}</h6>
                </ListGroup.Item>
                <ListGroup.Item>
                  category: {blog.category}
                </ListGroup.Item>
                <ListGroup.Item>
                  news: {blog.newsBody}
                </ListGroup.Item>
              
              </ListGroup>
            </Col>
            <Col md={3}>
            <ListGroup variant='flush'>
            <ListGroup.Item>
                  channel: {blog.channelId}
                </ListGroup.Item>
            <ListGroup.Item style={{color:"blue"}}>
                  post: {blog.postDate}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>):"no  data"}
    </>
  )
  
}

export default BlogCard;
