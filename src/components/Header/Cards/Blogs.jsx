import React, { useEffect, useState } from "react";
import { Row, Col, Card,} from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import "./Blogs.css";

import axios from "axios";
import { imageArray } from "../../../Config";
// import BlogCard from "../BlogCards/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = async () => {
    try {
      const { data } = await axios.get(
        `https://newsonic-backend.herokuapp.com/api/posts/fetch-home`
      );
      console.log("first", data.posts);
      setBlogs(data.posts);
    } catch (error) {}
  };
  return (
    <>
      <div className="cardmain">
        <div className="content">
           <h2>Blog Articles</h2>
        </div>
      
          
                    <Row xs={4} md={4} lg={12} xl={12} className="g-12">
                    {blogs &&
              blogs.map((blog,index) => {
                return (
                        <Col>
                          <Card>
                          <Card.Img variant="top" src={imageArray[index]} />
                            <Card.Body>
                                      <Card.Title>{blog.newsHead}</Card.Title>
                                      <Link
                                        to={`/blog/${blog._id}`}
                                        state={{ imageUrl: imageArray[index] }}
                                        className="btn btn-primary"
                                        style={{width:"200px"}}
                                      >
                                        Click
                                      </Link>{" "}
                                    </Card.Body>
                          </Card>
                        </Col>
                         );
                        })}
                    </Row>
              
        
      </div>
    </>
  );
};
export default Blogs;















 
 


