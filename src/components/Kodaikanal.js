import React from 'react'
import Ko from './Img/Kodaikanal/Kodaikanal.jpeg';
import Ko1 from './Img/Kodaikanal/kodaikanal1....jpeg';
import Ko2 from './Img/Kodaikanal/kodaikanal2.jpeg';
import Ko3 from './Img/Kodaikanal/kodaikanal3..jpeg';
import Ko4 from './Img/Kodaikanal/kodaikanal4.jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Kodaikanal() {
  return (
    <section id="kodaikanal">
    <div className='container mt-5'>
   <h2>03. Kodaikanal</h2>
   <div className="row">
        <div className="col-sm">
        <img src={Ko} alt="Chennai Image" className="img-fluid"  style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
        
        </div>
        <div className="col-sm">
           <div className='mt-2'>
               <h6><b>“The Princess of Hill Stations”</b></h6>
               <p className='mt-3 p'>
               Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is
one of the most famous honeymoon destinations in India. A Lakeside resort
town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered
manicured cliffs and waterfall that come together to create the ideal setting
for a perfect getaway. Kodaikanal means ‘the gift of the forests’.
               </p>
               <p className='p'>
               Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal
stands at an altitude of 7200 feet above sea level, and once you visit this hill
station, you will find that every bit of what you have imagined it to be is real.
Kodaikanal is a place you can go to take a break from the rigours of daily city
life, and this hill station lets you sit back and connect with nature as you head
out on biking or trekking trails or take a stroll through the vast forests
surrounding the town.
               </p>
               
           </div>
        </div>
   </div>

               <div className='mt-5 mb-5 text-center'>
                  <h4>Must Visit Place In Kodaikanal</h4>
               </div>
               <div className="container mt-3">
      <div className="row mb-3 ">
        <div className="col-sm d-flex ">
        <Card style={{ width: '250px',height: '390px' }} className="flex-grow-1">
                   <Card.Img variant="top" src={Ko1} />
                     <Card.Body>
                       <Card.Title> Green Valley View </Card.Title>
                              <Card.Text>
                              Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep...
                              <div className='mt-4'>
                              <Button variant="primary">Read More</Button>
                              </div>
                              </Card.Text>
                              
                     </Card.Body>
              </Card>

        </div>
        <div className="col-sm box ">
        <Card style={{ width: '250px',height: '390px' }}>
                   <Card.Img variant="top" src={Ko2} />
                     <Card.Body>
                       <Card.Title> Kodai Lake</Card.Title>
                              <Card.Text >
                              Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai Lake. Vera...
                              <div className='mt-4'>
                              <Button variant="primary">Read More</Button>
                              </div>
                              </Card.Text>
                                    
                     </Card.Body>
              </Card>

        </div>
        <div className="col-sm box ">
               <Card style={{ width: '250px',height: '390px' }}>
                   <Card.Img variant="top" src={Ko3} />
                     <Card.Body>
                       <Card.Title> Bear Shola Falls </Card.Title>
                              <Card.Text>
                              Located at a mere distance of 2 kilometres from the Kodaikanal Lake, the Bear Shola Falls is a popular...
                              <div className='mt-4'>
                              <Button variant="primary">Read More</Button>
                              </div>
                              </Card.Text>
                                    
                     </Card.Body>
              </Card>
        </div>
        <div className="col-sm box ">
               <Card style={{ width: '250px',height: '390px' }}>
                   <Card.Img variant="top" src={Ko4} />
                     <Card.Body>
                       <Card.Title> Pillar Rocks</Card.Title>
                              <Card.Text>
                              Situated in the ‘Princess of Hill stations’, Kodaikanal, the PillarRocks have become a lovely picnic..
                              <div className='mt-4'>
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

export default Kodaikanal;
