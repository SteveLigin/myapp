import React from 'react'
import Ot from './Img/Ooty/Ooty.jpeg';
import Ot1 from './Img/Ooty/ooty1 (1).jpeg';
import Ot2 from './Img/Ooty/ooty1 (2).jpeg';
import Ot3 from './Img/Ooty/ooty1 (3).jpeg';
import Ot4 from './Img/Ooty/ooty1 (4).jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Ooty() {
  return (
    <section id="ooty">
    <div className='container mt-5'>
   <h2>04. Ooty</h2>
   <div className="row">
        <div className="col-sm">
        <img src={Ot} alt="Chennai Image" className="img-fluid"  style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
        
        </div>
        <div className="col-sm">
           <div className='mt-2'>
               <h6><b>“Queen of the Nilgi”</b></h6>
               <p className='mt-3 p'>
               Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is
a hill station in Tamil Nadu which serves as a top-rated tourist destination.
Once regarded as the summer headquarters of the East India Company, the
Queen of the hills is a picturesque getaway.
               </p>
               <p className='p'>
               The Nilgiri mountain railway is the steepest track in all of Asia
Remember the hit song ‘Chaiyya Chaiyya' where Shahrukh Khan and Malaika
Arora matching steps on top of a train? Remember the breathtaking locales
as the train chugged its way across lush greenery? Yes, that was the Nilgiri
Mountain Railways, and the Nilgiri Mountains all along Dotted with tea
gardens, serene waterfalls, winding country lanes, and charming colonial
architecture, Ooty is the perfect respite everyone.
               </p>
               
           </div>
        </div>
   </div>

               <div className='mt-5 mb-5 text-center'>
                  <h4>Must Visit Place In Ooty</h4>
               </div>
               <div className="container mt-3">
      <div className="row mb-3 ">
        <div className="col-sm d-flex ">
        <Card style={{ width: '250px',height:'400px' }} className="flex-grow-1">
                   <Card.Img variant="top" src={Ot1} style={{height: '180px'}} />
                     <Card.Body>
                       <Card.Title> Nilgiri Mountain Railway </Card.Title>
                              <Card.Text>
                              Nilgiri Mountain Railway, also known as Toy Train in Ooty, is one of the key attractions of the popular hill..
                              <div className='mt-3'>
                              <Button variant="primary">Read More</Button>
                              </div>
                              </Card.Text>
                              
                     </Card.Body>
              </Card>

        </div>
        <div className="col-sm box ">
        <Card style={{ width: '250px', height:'400px',lineHeight:'34px' }}>
                   <Card.Img variant="top" src={Ot2} style={{height: '180px'}} />
                     <Card.Body>
                       <Card.Title> Ooty Botanical Garden</Card.Title>
                              <Card.Text >
                              Ooty Botanical Gardens lie on the lower slopes of the Doddabetta peak, the Government Botanical...
                              <div className='btnot'>
                              <Button variant="primary">Read More</Button>
                              </div>
                              </Card.Text>
                                    
                     </Card.Body>
              </Card>

        </div>
        <div className="col-sm box ">
               <Card style={{ width: '250px', height:'400px',lineHeight:'31px' }}>
                   <Card.Img variant="top" src={Ot3} style={{height: '180px'}}/>
                     <Card.Body>
                       <Card.Title> Emerald Lake</Card.Title>
                              <Card.Text>
                              Emerald Lake is situated in Emerald Village, around 20-22 kilometres from the main city of Ooty and...
                               <div className='btnot2'>
                              <Button variant="primary">Read More</Button>
                              </div>
                              </Card.Text>
                                    
                     </Card.Body>
              </Card>
        </div>
        <div className="col-sm box ">
               <Card style={{ width: '250px',height:'400px',lineHeight:'31px' }}>
                   <Card.Img variant="top" src={Ot4} style={{height: '180px'}} />
                     <Card.Body>
                       <Card.Title> Dolphin’s Nose </Card.Title>
                              <Card.Text>
                              Located about 12 km away from Coonoor is the Dolphins Nose about 1,500 meters above sea level. The tip...
                              <div className='btnot2'>
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

export default Ooty;