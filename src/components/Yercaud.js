import React from 'react'
import Ka from './Img/Yercaud/Yarcaud.jpeg';
import Ka1 from './Img/Yercaud/yercaud...(1).jpeg';
import Ka2 from './Img/Yercaud/yercaud1 (2).jpeg';
import Ka3 from './Img/Yercaud/yercaud1.(3).jpeg';
import Ka4 from './Img/Yercaud/yercaud1 (4).jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Yercaud() {
  return (
    <section id="yercaud">
    <div className='container mt-5'>
   <h2>08. Yercaud</h2>
   <div className="row">
        <div className="col-sm">
        <img src={Ka} alt="Chennai Image" className="img-fluid"  style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
        
        </div>
        <div className="col-sm">
           <div className='mt-2'>
               <h6><b>“The Land of Seven Forest"</b></h6>
               <p className='mt-3 p'>
               Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud
is a hill station in the Eastern Ghats steeped in abundant greenery
Commonly called ‘Ooty of the Poor’, this region has a history dating back to
the time of the British. Located at an altitude of 4970 feet, Yercaud is known
for its vast expanses of coffee plantations and great weather


               </p>
               <p className='p'>
               Yercaud lake is the main point of attraction of the region.One of the
many highlights is the summer festival that takes place in May. It is dedicated
to Lord Servarayan, the supreme god of the ranges and gives visitors a
glimpse into the rich heritage of this region.
               </p>
               
           </div>
        </div>
   </div>

               <div className='mt-5 mb-5 text-center'>
                  <h4>Must Visit Place In  Yercaud</h4>
               </div>
               <div className="container mt-3">
      <div className="row mb-3 ">
        <div className="col-sm d-flex ">
        <Card style={{ width: '250px', height: '400px', lineHeight:'25px' }} className="flex-grow-1">
                   <Card.Img variant="top" src={Ka1} style={{height: '180px'}} />
                     <Card.Body>
                       <Card.Title> Pagoda Point </Card.Title>
                              <Card.Text>
                              Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated ...
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
                       <Card.Title> Botanical Garden  </Card.Title>
                              <Card.Text >
                              Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various...
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
                       <Card.Title> Emerald Lake </Card.Title>
                              <Card.Text> 
                              The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake...
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
                       <Card.Title> Lady,s Seat </Card.Title>
                              <Card.Text>
                              Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam...
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

export default Yercaud;