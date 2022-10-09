
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from './components/Header/Cards/Blogs';
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';
import BlogCard from './components/Header/BlogCards/BlogCard';
import Footer from './components/Header/Footer/Footer';
// import Slider from './components/Header/Slider/Slider';

function App() {
  return (
    <>
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/blog/:_id' element={<BlogCard />} />
            <Route path='/' element={<Blogs />} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  </>
  );
}

export default App;
