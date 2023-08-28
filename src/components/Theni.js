import React from 'react'
import Ka from './Img/Theni/Theni.jpeg';
import Ka1 from './Img/Theni/theni1.(1).jpeg';
import Ka2 from './Img/Theni/theni1 (2).jpeg';
import Ka3 from './Img/Theni/theni1.(3).jpeg';
import Ka4 from './Img/Theni/theni1.(4).jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Theni() {
  return (
    <section id="theni">
    <div className='container mt-5'>
   <h2>09. Theni</h2>
   <div className="row">
        <div className="col-sm">
        <img src={Ka} alt="Chennai Image" className="img-fluid"  style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
        
        </div>
        <div className="col-sm">
           <div className='mt-2'>
               <h6><b>"A little hamlet in Tamil Nadu”</b></h6>
               <p className='mt-3 p'>
               Theni Tourism Dotted by luscious patches of greenery and beautiful
waterfalls, Theni is a little hamlet on the Western Ghats. The topography of
Theni mainly consists of hills and ranges. It has plenty of rivers and dams and
is an abode to 27 forests hence filled with unparalleled greenery.


               </p>
               <p className='p'>
               There temples like Kamatchi Amman Temple, Vellappar Temple, and
Balasubramanya Temple which are brimming with devotees from all around
the country throughout the year. The vibrant local markets of Theni are
shopper's paradise. The local handloom products and agricultural products
are the best buys at these markets. The aroma filled tea estates in Theni are a
paradise. The Kolukkamalai Tea estate is often deemed to be the world's
highest organic tea estate. The Suruli Falls and the Kumbakarai Falls are the
crown jewels of Theni.
               </p>
               
           </div>
        </div>
   </div>

               <div className='mt-5 mb-5 text-center'>
                  <h4>Must Visit Place In  Theni</h4>
               </div>
               <div className="container mt-3">
      <div className="row mb-3 ">
        <div className="col-sm d-flex ">
        <Card style={{ width: '250px', height: '400px', lineHeight:'24px' }} className="flex-grow-1">
                   <Card.Img variant="top" src={Ka1} style={{height: '180px'}} />
                     <Card.Body>
                       <Card.Title> Chinna Suruli Falls </Card.Title>
                              <Card.Text>
                              Located in the lap of wild, green forests, Chinna Suruli Falls is a picturesque destination to visit from Theni.<div className='mt-3'>
                              <Button variant="primary">Read More</Button>
                              </div>
                              </Card.Text>
                              
                     </Card.Body>
              </Card>

        </div>
        <div className="col-sm box ">
        <Card style={{ width: '250px',height: '400px',lineHeight:'24px' }}>
                   <Card.Img variant="top" src={Ka2} style={{height: '180px'}} />
                     <Card.Body>
                       <Card.Title> Kumbakkarai Falls </Card.Title>
                              <Card.Text >
                              Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai Falls is a  mesmerising waterfall that..
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
                       <Card.Title> Meghamalai </Card.Title>
                              <Card.Text> 
                              Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise...
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
                       <Card.Title> Suruli Falls </Card.Title>
                              <Card.Text>
                              Suruli Falls is a beautiful waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions of.<div className='mt-3'>
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

export default Theni;