import React, { useEffect, useState } from "react";
import { Row, Col, Card,} from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import "./Blogs.css";

import axios from "axios";
// import BlogCard from "../BlogCards/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = async () => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=300be0372ce64ead840346911752051c`
      );
      console.log("first", data.articles);
      setBlogs(data.articles);
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
              blogs.map((blog) => {
                return (
                        <Col>
                          <Card>
                          <Card.Img variant="top" src={blog.urlToImage} />
                            <Card.Body>
                                      <Card.Title>{blog.source.name}</Card.Title>
                                      <Link
                                        to={`/blog/${blog.source.name}`}
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















 
 


