import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:"100%",objectFit:"contain"}}
        src="https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg?w=1200"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:"100%",objectFit:"contain"}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TH1xuOcjep_jKXr9pZBBnfBnLcpevqttcqHRcvXqdIf_qF1XtP2B5rMqm1RLsChjlbA&usqp=CAU"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{height:"100%",objectFit:"contain"}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgHnGUIaiYZU4grEFvhxVBlsY7JHM1IAhaRr2KabvgW2r_gvhx17zPU6JXS4Q6ePxQ6ck&usqp=CAU"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider