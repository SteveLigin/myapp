import React from 'react'
import Ch from './Img/Chennai/Chennai.jpeg';
import Ch1 from './Img/Chennai/chennai1.jpeg';
import Ch2 from './Img/Chennai/chennai2.jpeg';
import Ch3 from './Img/Chennai/chennai3...jpeg';
import Ch4 from './Img/Chennai/chennai4.jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Chennai() {
  return (
    <section id="chennai">
 <div className='container mt-5'>
   <h2>01. Chennai</h2>
   <div className="row">
        <div className="col-sm">
        <img src={Ch} alt="Chennai Image" className="img-fluid"  style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
        
        </div>
        <div className="col-sm">
           <div className='mt-2'>
               <h6><b>"The Detroit of India"</b></h6>
               <p className='mt-3 p'>
                                  Formerly known as Madras, Chennai is the capital city of the state of
                            Tamil Nadu, in the southern part of India. Located on the Coromandel coast
                          of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This
                          “capital of the south’, is one among the four metropolitan siblings of India,
                         having a rich cultural history which it perfectly balances with its metropolis
                        lifestyle.
               </p>
               <p className='p'>
                          Amid its chaos of traffic and sweltering humid climate, Chennai is
                         worth visiting for its temples steeped in south-Indian culture, British-era
                          museums and monuments, culinary delights and Marina Beach (Second
                          largest urban beach in the world). Chennai's skyline is famous for its towering
                          skyscrapers, but the heart of Chennai has an old-world charm to it that
                          refuses to be overshadowed
               </p>
               
           </div>
        </div>
   </div>

               <div className='mt-5 mb-5 text-center'>
                  <h4>Must Visit Place in Chennai</h4>
               </div>
               <div className="container mt-3">
      <div className="row mb-3 ">
        <div className="col-sm d-flex ">
        <Card style={{ width: '250px',height: '400px',lineHeight:'33px' }} className="flex-grow-1">
                   <Card.Img variant="top" src={Ch1} />
                     <Card.Body>
                       <Card.Title> Marina Beach</Card.Title>
                              <Card.Text>
                              Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the sea Bay of Bengal...
                              <div className="btn1">
                              <Button variant="primary" style={{marinTop:'25px'}}>Read More</Button>
                              </div>
                              </Card.Text>
                              
                     </Card.Body>
              </Card>

        </div>
        <div className="col-sm box ">
        <Card style={{ width: '250px',height: '400px' }}>
                   <Card.Img variant="top" src={Ch2} />
                     <Card.Body>
                       <Card.Title> MGR Flim City</Card.Title>
                              <Card.Text >
                              Having been established in the year 1994, and a considerably new structure, the MGR Film city is managed...
                              </Card.Text>
                                    <button className='btn btn-primary '>Read More</button>
                     </Card.Body>
              </Card>

        </div>
        <div className="col-sm box ">
               <Card style={{ width: '250px',height: '400px' }}>
                   <Card.Img variant="top" src={Ch3} />
                     <Card.Body>
                       <Card.Title> Marundeeswarar Temple</Card.Title>
                              <Card.Text>
                              The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva...
                              </Card.Text>
                                    <button className='btn btn-primary '>Read More</button>
                     </Card.Body>
              </Card>
        </div>
        <div className="col-sm box ">
               <Card style={{ width: '250px',height: '400px' }}>
                   <Card.Img variant="top" src={Ch4} />
                     <Card.Body>
                       <Card.Title> Breezy Beach</Card.Title>
                              <Card.Text>
                                    Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai. Being smaller and less polluted...
                              </Card.Text>
                                    <button className='btn btn-primary '>Read More</button>
                     </Card.Body>
              </Card>
        </div>
      </div>
     </div>


</div>
</section>
  )
}

export default Chennai;