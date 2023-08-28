import React from 'react'

export default function Start() {
  return (
<section>
   <div className='container'>
       <div className="row">
                <div className="col-sm-6 mt-5 mb-3" >
                     <h3>Tourist Place in Tamil Nadu</h3>
                     <p className='p mt-4 ' style={{ textAlign: 'justify' }}>Chennai, Ooty, Pondicherry, Kodaikanal, Coimbatore, Yelagiri, Masinagudi, Conoor, Madumalai, Yercaud, Madurai, Thanjavur, Mahabalipuram, Kanyakumari, Kotagiri, Nilgiri, Krishnagiri, Auroville, Theni, Hullathy, Rameshwaram, Kalhatty Ghat and more.</p>
                     
                     <p className='p mt-3 ' style={{ textAlign: 'justify' }}> Enjoy a vacation to remember and cherish some amazing experiences while touring the most gorgeous places to visit in Tamil Nadu. With many serene beaches, beautiful temples known for Dravidian architecture, bustling shopping bazaars and adventurous wildlife places, these places offer a splendid mix to help you make superb travel itinerary.</p>
                
                     <p className='p mt-3 ' style={{ textAlign: 'justify' }}>Looking forward to visiting the most stunning places to see in Tamil Nadu? Well, then you are in for a great time. From the thriving cosmopolitan vibes of Chennai to the emerald tea plantations of Ooty and the French style houses of Pondicherry to the scenic beauty of Kodaikanal, these places will leave you overwhelmed. There is an awesome experience in store, whether you are going for leisure, backpacking or looking for an adventure.</p>
                </div>
                <div className="col-sm-6  mb-3" style={{marginTop:'57px'}}>
                <img src={require("./img/Kanyakumari/Place.jpeg")}alt="Tourist Place To Visit In Tamil Nadu" style={{ height: '435px',width:'548px' }}></img>
                     <p className='text-center'>Tourist Place to Visit In Tamil Nadu</p>
                </div>
                <div className="container">
                    <p className='p' style={{ textAlign: 'justify' }}>The variety of tourist places in Tamil Nadu offers you a glimpse of all kinds of sightseeing and adventures. Tourists here can choose among many
                        offbeat places like Yelagiri and Yercaud to the famous cultural citadels like Mahabalipuram and Madurai, Tamil Nadu is also home to the southernmost land of
                        India- Kanyakumari and one of the char dhams-Rameshwaram. Whether it is an adventure you are looking for or a religious respite in the temples, these
                        places are a delight for anyone wishing to escape the hustle and bustle of life.</p>
                </div>

       </div>


   </div>  
 </section>
  )
}
