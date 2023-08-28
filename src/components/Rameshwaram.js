import React from 'react'
import Rm from './Img/Rameshwaram/Rameshwaran.jpeg';
import Rm1 from './Img/Rameshwaram/rameshwarem1.jpeg';
import Rm2 from './Img/Rameshwaram/rameshwarem2.jpeg';
import Rm3 from './Img/Rameshwaram/Rameshwaram3..jpeg';
import Rm4 from './Img/Rameshwaram/rameshwarem1 (5).jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Rameshwaram() {
  return (
    <section id="rameshwaram">
 <div className='container mt-5'>
   <h2>02. Rameshwaram</h2>
   <div className="row">
        <div className="col-sm">
        <img src={Rm} alt="Chennai Image" className="img-fluid"  style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
        
        </div>
        <div className="col-sm">
           <div className='mt-2'>
               <h6><b>“The Bridge on the Indian Ocean"</b></h6>
               <p className='mt-3 p'>
                Rameshwaram is located on a beautiful island in the South Indian
             state of Tamil Nadu. It is separated by a small Pamban channel from Sri
             Lanka. According to Hindu mythology, this is the place where Lord Rama
             created a bridge across the sea to Sri Lanka
               </p>
               <p className='p'>
                    Renowned for its magnificent prakaras with massive sculptured
               pillars on either side, The Ramanathaswamy Temple houses the longest
                corridor in the world. Agniteertham is famous for its sacred waters and
              Pilgrims perform poojas in honour of their ancestors at this seashore. The
              five-faced Hanuman Temple holds the floating stone which was used to build
              the bridge between India and Sri Lanka. Rameshwaram has the first sea
              bridge connecting the town of Mandapam with Pamban Island, and
                 Rameswaram.
               </p>
               
           </div>
        </div>
   </div>

               <div className='mt-5 mb-5 text-center'>
                  <h4>Must Visit Place In Rameshwaram</h4>
               </div>
               <div className="container mt-3">
      <div className="row mb-3 ">
        <div className="col-sm d-flex ">
        <Card style={{ width: '250px' ,height: '400px',lineHeight:'33px'}} className="flex-grow-1">
                   <Card.Img variant="top" src={Rm1} />
                     <Card.Body>
                       <Card.Title> Dhanushkodi Temple</Card.Title>
                              <Card.Text>
                              Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India. However, due to a...
                              <div className="btn2rm">
                              <Button variant="primary">Read More</Button>
                              </div>
                              </Card.Text>
                              
                     </Card.Body>
              </Card>

        </div>
        <div className="col-sm box ">
        <Card style={{ width: '250px',height: '400px' }}>
                   <Card.Img variant="top" src={Rm2} />
                     <Card.Body>
                       <Card.Title> Lakshmana Temple</Card.Title>
                              <Card.Text >
                              Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama. In order..
                              <div className='mt-3'>
                              <Button variant="primary">Read More</Button>
                              </div>
                              </Card.Text>
                                    
                     </Card.Body>
              </Card>

        </div>
        <div className="col-sm box ">
               <Card style={{ width: '250px',height: '400px',lineHeight:'34px' }}>
                   <Card.Img variant="top" src={Rm3} />
                     <Card.Body>
                       <Card.Title> Rameshwaram Temple</Card.Title>
                              <Card.Text>
                              A perfect blend of mind- boggling architecture and spiritual significance, Rameshwaram Temple, also...
                              <div className="btn2rm">
                              <Button variant="primary">Read More</Button>
                              </div>
                              </Card.Text>
                                    
                     </Card.Body>
              </Card>
        </div>
        <div className="col-sm box ">
               <Card style={{ width: '250px',height: '400px',lineHeight:'30px' }}>
                   <Card.Img variant="top" src={Rm4} />
                     <Card.Body>
                       <Card.Title> Viloondi Tirtham</Card.Title>
                              <Card.Text>
                              Villoondi Tirtham is a beach which is also considered a sacred natural water body and a favourite amongst tourists...
                              <div className="btn2rm">
                              <Button variant="primary">Read More</Button>
                              </div>
                              </Card.Text>
                                    
                     </Card.Body>
              </Card>
        </div>
      </div>
     </div>


</div>
</section>
  )
}

export default Rameshwaram;