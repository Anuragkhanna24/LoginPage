import React from 'react'

function Carousel() {

  return (
    
    <div>
        <h1 className='text-center bg-dark text-white p-2 m-2'>carousal</h1>
        <h3>With the help of BootStrap...</h3>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://th.bing.com/th/id/OIP.BPZpy1UeDbnNMsMpQrcEAQHaFj?w=184&h=138&c=7&r=0&o=5&pid=1.7" className="d-block w-100 "/>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th?id=OIP.b9OyVJzx8L2ja3HELo081wHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" className="d-block w-100"/>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.CqIi-W69S_I2n8hg98x4ygHaEK?w=184&h=104&c=7&r=0&o=5&pid=1.7" className="d-block w-100 "/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    
  )
}

export default Carousel