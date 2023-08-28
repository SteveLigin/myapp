import React from 'react'
import Ka from './Img/Kumbakonam/Kumbakonam.jpeg';
import Ka1 from './Img/Kumbakonam/kumbakonam1 (1).jpeg';
import Ka2 from './Img/Kumbakonam/kumbakonam1 (2).jpeg';
import Ka3 from './Img/Kumbakonam/kumbakonam1 (3).jpeg';
import Ka4 from './Img/Kumbakonam/kumbakonam1 (4).jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Kumbakonam() {
  return (
    <section id="kumbakonam">
    <div className='container mt-5'>
   <h2>06. Kumbakonam</h2>
   <div className="row">
        <div className="col-sm">
        <img src={Ka} alt="Chennai Image" className="img-fluid"  style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
        
        </div>
        <div className="col-sm">
           <div className='mt-2'>
               <h6><b>“The Cambridge of India"</b></h6>
               <p className='mt-3 p'>
               Kumbakonam Tourism Sandwiched between two great rivers of
s48¢. southern India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town
TENE in the heart of the Thanjavur district of Tamil Nadu.The town is a place for the
lovers of history and those seeking to understand India's cultural roots and
Hinduism.

               </p>
               <p className='p'>
               The town is also known for its grand festival called Mahamaham
festival which is celebrated every twelve years at the Mahamaham Tank. The
town is one of the oldest in Indian history, and known for its famed temples,
Chola heritage and also for its marvelous educational institutes. The town is
one of the oldest in Indian history, and known for its famed temples, Chola
heritage and also for its marvelous educational institutes.
               </p>
               
           </div>
        </div>
   </div>

               <div className='mt-5 mb-5 text-center'>
                  <h4>Must Visit Place In Kumbakonam</h4>
               </div>
               <div className="container mt-3">
      <div className="row mb-3 ">
        <div className="col-sm d-flex ">
        <Card style={{ width: '250px', height: '400px' }} className="flex-grow-1">
                   <Card.Img variant="top" src={Ka1} style={{height: '180px'}} />
                     <Card.Body>
                       <Card.Title> Sarangapani Temple</Card.Title>
                              <Card.Text>
                              Sarangapani Temple, an ancient temple dedicated to Lord Vishnu, is located in the town of Kumbakonam...
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
                       <Card.Title> Nageswaran Temple  </Card.Title>
                              <Card.Text >
                              Constructed as a chariot, the Nageswaran temple is an important Shalvite temple. A piece of genius Chola.
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
                       <Card.Title> Adi Kumbeshwara Temple</Card.Title>
                              <Card.Text> 
                              Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara... 
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
                       <Card.Title> Airavatesvara Temple   </Card.Title>
                              <Card.Text>
                              Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara Temple is a revered...
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

export default Kumbakonam;