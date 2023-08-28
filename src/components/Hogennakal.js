import React from 'react'
import Ka from './Img/Hogenakkal/Hogenakkal.jpeg';
import Ka1 from './Img/Hogenakkal/Hogenakkal.jpeg';
import Ka2 from './Img/Hogenakkal/hogenakkal2..jpeg';
import Ka3 from './Img/Hogenakkal/hogenakkal3.jpeg';
import Ka4 from './Img/Hogenakkal/hokenakkal4..jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Hogennakal() {
  return (
    <section id="hogenakkal">
    <div className='container mt-5'>
   <h2>10. Hogenakkal</h2>
   <div className="row">
        <div className="col-sm">
        <img src={Ka} alt="Chennai Image" className="img-fluid"  style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
        
        </div>
        <div className="col-sm">
           <div className='mt-2'>
               <h6><b>“The one that will take your breath away"</b></h6>
               <p className='mt-3 p'>
               Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri
district of Tamil Nadu where the Kaveri river splits into multiple streams of
waterfalls, Located at a distance of 180 km from Bangalore, Hogenakkal has
water throughout the year. The carbonite rocks, the coracle (basket boat)
tides, freshwater fish, oil massages by locals make it a perfect one day trip or
a weekend getaway from Bangalore.



               </p>
               <p className='p'>
               Sometimes referred to as the “Niagara Falls of India," it is also known
for the medicinal baths. Also known at Marikottayam, Hoge actually means
smoke and Kal means rock. Recently, the place has been found to be littered
with plastic bags and garbage and the fish market outside the waterfall
might stink. Weekends can be crowded. Keep all these points in mind before
visiting.
               </p>
               
           </div>
        </div>
   </div>

               <div className='mt-5 mb-5 text-center'>
                  <h4>Must Visit Place In  Hogenakkal</h4>
               </div>
               <div className="container mt-3">
      <div className="row mb-3 ">
        <div className="col-sm d-flex ">
        <Card style={{ width: '250px', height: '400px' }} className="flex-grow-1">
                   <Card.Img variant="top" src={Ka1} style={{height: '180px'}} />
                     <Card.Body>
                       <Card.Title> Theerthamalai Temple </Card.Title>
                              <Card.Text>
                              Theerthamalai is a popular pilgrim centre close to Hogenakkal. One of its most popular destinations is the...
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
                       <Card.Title> Hogenakkal Falls </Card.Title>
                              <Card.Text >
                              Hogenakkal Falls is a scintillating waterfall that is located on river Kaveri in the Dharmapuri district of...
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
                       <Card.Title> Pennagram Village </Card.Title>
                              <Card.Text> 
                              The village is located about 20 km away from Hogenakkal is famous for its weekly fair

                                it holds every...
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
                       <Card.Title>  Mettur Dam </Card.Title>
                              <Card.Text>
                              Mettur Dam, situated 30 miles from Salem in a small Mettur Village, is one of the largest dams in India. Built...
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

export default Hogennakal;