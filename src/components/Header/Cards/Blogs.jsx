import React, { useEffect, useState } from "react";
import { Row, Col, Card,} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Blogs.css";
import axios from "axios";
import { imageArray } from "../../../Config";

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
        {/* <div className="content">
           <h2>Blog Articles</h2>
        </div> */}
            <div className="header">
         <h1>India vs Western Australia XI T20 World Cup practice match Highlights : India beat WA XI by 13 runs</h1>
         <h5>IND vs WA XI, T20 World Cup Practice Match Highlights: India beat Western Australia by 13 runs.</h5>
      </div>
          
                    <Row xs={12} md={4} lg={12} xl={12} className="g-12">
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
                                        className="btn btn-dark"
                                        style={{width:"200px",color:"white",borderRadius:"120px", display:"block"}}
                                      >
                                        Continue reading
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















 
 


