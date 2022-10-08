import React, { useEffect, useState } from "react";
import {ListGroup,Image,Row,Col} from "react-bootstrap";
import axios from "axios";
import {useParams} from 'react-router-dom'


function BlogCard() {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState([]);
    const {name} =useParams()
  useEffect(() => {
    getBlogs();
  }, [blog]);
  const getBlogs = async () => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=300be0372ce64ead840346911752051c`
      );
      console.log("first", data.articles);
      setBlogs(data.articles);
      const datas =blogs.filter(item=>{
        return item.source.name === name
      })
      setBlog(datas[0])
      console.log("datas",datas[0].description)
  
    } catch (error) {}
  };
  return (
    <>
    {blog ?(<Row>
            <Col md={6}>
              <Image src={blog.urlToImage} alt={blog.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h4 style={{color:"red"}}>{name}</h4>
                  <h6 style={{color:"blue"}}>{blog.author}</h6>
                </ListGroup.Item>
                <ListGroup.Item>
                  Title: {blog.title}
                </ListGroup.Item>
                <ListGroup.Item>
                  Description: {blog.description}
                </ListGroup.Item>
              
              </ListGroup>
            </Col>
            <Col md={3}>
            <ListGroup variant='flush'>
            <ListGroup.Item>
                  Content: {blog.content}
                </ListGroup.Item>
            <ListGroup.Item style={{color:"blue"}}>
                  Published at: {blog.publishedAt}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>):"no  data"}
    </>
  )
  
}

export default BlogCard;
