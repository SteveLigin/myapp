import React from 'react'
import img1 from '../Home/banner.1.jpg';
import img2 from '../Home/pic1.jpeg';
import img3 from '../Home/pic2.jpeg';
import img4 from '../Home/pic3.jpeg';
import img5 from '../Home/pic4.jpeg';
import { HashLink as Link } from 'react-router-hash-link';


 function Indicator() {
  return (
    <div>
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">

        <ol class="carousel-indicators">
          <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>

        </ol>

        <div className='container'>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} alt="Slide 1" style={{ width: '100vw', height: '30rem' }} />
            </div>
            <div class="carousel-item">
              <img src={img2} alt="Slide 2" style={{ width: '100vw', height: '30rem' }} />
            </div>
            <div class="carousel-item">
              <img src={img3} alt="Slide 3" style={{ width: '100vw', height: '30rem' }} />
            </div>
            <div class="carousel-item">
              <img src={img4} alt="Slide 3" style={{ width: '100vw', height: '30rem' }} />
            </div>
            <div class="carousel-item">
              <img src={img5} alt="Slide 3" style={{ width: '100vw', height: '29rem' }} />

            </div></div>

        </div>


        <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div><br/><br/>


      <div className="container text-center">
        <h4>Tourist Places To Tamil Nadu<br />
          Here Are The Top Places To Visit In Tamil Nadu In 2023</h4>
      </div><br/>


      <div className='container-sm pass  d-flex justify-content-center'>
  <div className='row text-center'>
    <div className='col-md'>
      <Link to="#chennai" style={{ padding: '65px' , color:'#0688F9',textDecoration:'none'}}>Chennai</Link>
    </div>
    <div className='col-md'>
      <Link to="#kodaikanal" style={{ padding: '65px' , color:'#0688F9',textDecoration:'none' }}>Kodaikanal</Link>
    </div>
    <div className='col-md'>
      <Link to="#madurai" style={{ padding: '65px' , color:'#0688F9',textDecoration:'none' }}>Madurai</Link>
    </div>
    <div className='col-md'>
      <Link to="#kumbakonam" style={{ padding: '65px' , color:'#0688F9',textDecoration:'none' }}>Kumbakonam</Link>
    </div>
    <div className='col-md'>
      <Link to="#theni" style={{ padding: '65px', color:'#0688F9',textDecoration:'none' }}>Theni</Link>
    </div>
  </div>
</div>



<div className='container pass1 mb-5  d-flex justify-content-center'>
  <div className='row text-center'>
    <div className='col-md'>
      <Link to="#rameshwaram" style={{ padding: '65px' , color:'#0688F9',textDecoration:'none'}}>Rameshwaram</Link>
    </div>
    <div className='col-md'>
      <Link to="#ooty" style={{ padding: '65px' , color:'#0688F9',textDecoration:'none' }}>Ooty</Link>
    </div>
    <div className='col-md'>
      <Link to="#kanyakumari" style={{ padding: '65px' , color:'#0688F9',textDecoration:'none' }}>Kanyakumari</Link>
    </div>
    <div className='col-md'>
      <Link to="#yercaud" style={{ padding: '65px' , color:'#0688F9',textDecoration:'none' }}>Yarcaud</Link>
    </div>
    <div className='col-md'>
      <Link to="#hogenakkal" style={{ padding: '65px', color:'#0688F9',textDecoration:'none' }}>Hogenakkal</Link>
    </div>
  </div>
</div>





    </div>


  )
}
export default Indicator;