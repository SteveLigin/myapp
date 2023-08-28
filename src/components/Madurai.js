import React from 'react'
import Ka from './Img/Madurai/Madurai.jpeg';
import Ka1 from './Img/Madurai/madurai1..jpeg';
import Ka2 from './Img/Madurai/madurai2.jpeg';
import Ka3 from './Img/Madurai/madurai3..jpeg';
import Ka4 from './Img/Madurai/madurai4..jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Madurai() {
  return (
    <section id="madurai">
    <div className='container mt-5'>
   <h2>07. Madurai</h2>
   <div className="row">
        <div className="col-sm">
        <img src={Ka} alt="Chennai Image" className="img-fluid"  style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
        
        </div>
        <div className="col-sm">
           <div className='mt-2'>
               <h6><b>“The Lotus City"</b></h6>
               <p className='mt-3 p'>
               Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is one
of the oldest continuously inhabited cities of India. Ruled by Pandya kings for
the longest time in its history, it is called as the ‘Lotus City" as it was planned
and built in the shape of a lotus. Madurai is known for Meenakshi Amman
Temple, dedicated to the goddess Meenakshi with a sanctum for her consort,
Sundareshwarar

               </p>
               <p className='p'>
               There are many other ancient temples in Madurai, including
Thiruparankundram. It is one of the important old temples dedicated to Lord
Muruga(Karthikeya) and is located on a hillock approximately 8 km from the
city. Having trade ties with ancient Rome, the place holds a great cultural
heritage. With bustling bazaars and fantastic street food, Madurai has
heritage walks conducted throughout the day.
               </p>
               
           </div>
        </div>
   </div>

               <div className='mt-5 mb-5 text-center'>
                  <h4>Must Visit Place In Madurai</h4>
               </div>
               <div className="container mt-3">
      <div className="row mb-3 ">
        <div className="col-sm d-flex ">
        <Card style={{ width: '250px', height: '400px' }} className="flex-grow-1">
                   <Card.Img variant="top" src={Ka1} style={{height: '180px'}} />
                     <Card.Body>
                       <Card.Title> Vaigai Dam </Card.Title>
                              <Card.Text>
                              Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai near Andipatti, Theni...

                              <div className='mt-3'>
                              <Button variant="primary">Read More</Button>
                              </div>
                              </Card.Text>
                              
                     </Card.Body>
              </Card>

        </div>
        <div className="col-sm box ">
        <Card style={{ width: '250px',height: '400px' }}>
                   <Card.Img variant="top" src={Ka2} style={{height: '180px'}} />
                     <Card.Body>
                       <Card.Title> Meghamalai  </Card.Title>
                              <Card.Text >
                              Often known as the “High Wavy Mountains", Meghamalai is a petit yet beautiful place located in the...
                              <div className='mt-3'>
                              <Button variant="primary">Read More</Button>
                              </div>
                              </Card.Text>
                                    
                     </Card.Body>
              </Card>

        </div>
        <div className="col-sm box ">
               <Card style={{ width: '250px',height: '400px' }}>
                   <Card.Img variant="top" src={Ka3} style={{height: '180px'}}/>
                     <Card.Body>
                       <Card.Title> Samanar Hills </Card.Title>
                              <Card.Text> 
                              Located in Keelakuyilkudi village near Madurai, Samanar Hills or Samanar Malai is a beautiful hill rock...
                              <div className='mt-3'>
                              <Button variant="primary">Read More</Button>
                              </div>
                              </Card.Text>
                                    
                     </Card.Body>
              </Card>
        </div>
        <div className="col-sm box ">
               <Card style={{ width: '250px',height: '400px' }}>
                   <Card.Img variant="top" src={Ka4} style={{height: '180px'}} />
                     <Card.Body>
                       <Card.Title> Thirumalai Nayakar  </Card.Title>
                              <Card.Text>
                              Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayak...
                              <div className='mt-3'>
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

export default Madurai;