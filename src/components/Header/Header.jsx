
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function NavScrollExample() {
  return (
   <div className='section-one'>
      <div className='navbar'>
        <div className="links">
         <a href="#Home">Home</a>
         <a href="#articles">Articles</a>
         <a href="#sports">Sports</a>
         <a href="#politics">Politics</a>
         <a href="#news">News</a>
         <a href="#blog">Blog</a>
        </div>
      </div>
   </div>
  );
}

export default NavScrollExample;