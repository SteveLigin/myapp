import React from 'react'
import Ka from './Img/Kanyakumari/Kanyakumari.jpeg';
import Ka1 from './Img/Kanyakumari/kanyakumari1 (1).jpeg';
import Ka2 from './Img/Kanyakumari/kanyakumari1.(2).jpeg';
import Ka3 from './Img/Kanyakumari/kanyakumari1 (3).jpeg';
import Ka4 from './Img/Kanyakumari/kanyakumari1 (4).jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Kanyakumari() {
  return (
    <section id="kanyakumari">
    <div className='container mt-5'>
   <h2>05. Kanyakumari</h2>
   <div className="row">
        <div className="col-sm">
        <img src={Ka} alt="Chennai Image" className="img-fluid"  style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
        
        </div>
        <div className="col-sm">
           <div className='mt-2'>
               <h6><b>“Cape Comorin or The Land's End"</b></h6>
               <p className='mt-3 p'>
               Kanyakumari Tourism Bordered by the three seas - Arabian, Indian
and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian
Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was
earlier known as Cape Comorin.

               </p>
               <p className='p'>
               Kanyakumari offers the marvellous confluence of the Bay of Bengal,
the Arabian Sea and the Indian ocean meeting together at a point. But, this is
not a miracle, the miracle lies in the beauty that the water of three seas does
not mix, you can clearly distinguish between the turquoise blue, deep blue
and sea green waters of the three seas. To enjoy the best view of sunset and
sunrise, you can visit the Triveni Sangam point and the famous View
tower The town has a mountainous terrain with elevated patches of hills,
coconut trees and lined with paddy fields.
               </p>
               
           </div>
        </div>
   </div>

               <div className='mt-5 mb-5 text-center'>
                  <h4>Must Visit Place In Kanyakumari</h4>
               </div>
               <div className="container mt-3">
      <div className="row mb-3 ">
        <div className="col-sm d-flex ">
        <Card style={{ width: '250px', height: '400px',lineHeight:'24px' }} className="flex-grow-1">
                   <Card.Img variant="top" src={Ka1} style={{height: '180px'}} />
                     <Card.Body>
                       <Card.Title> Kanyakumari Beach </Card.Title>
                              <Card.Text>
                              Located in the southernmost part of India, Kanyakumari beach with ts beautiful hue- changing beaches...
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
                       <Card.Title> Vivekananda Memorial </Card.Title>
                              <Card.Text >
                              The magnificent Vivekananda Rock Memorial is located on a small island off Kanyakumari. It has the picturesque... 
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
                       <Card.Title> Thiruvalluvar Statue</Card.Title>
                              <Card.Text> 
                              Dedicated to the accomplished philosopher and poet Thiruvalluvar, this beautiful statue finds itself...
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
                       <Card.Title> Thirparappu Falls  </Card.Title>
                              <Card.Text>
                              Located at a distance of about 55 kilometers from Kanyakumari, the cascading waters of the Thirparappu.. 
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

export default Kanyakumari;