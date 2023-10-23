import React from 'react'
import {Row , Col , Card} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigateByUrl = useNavigate()

  const navigate = ()=>{
    navigateByUrl('/home')
  }
  return (
    <>

    <Row className='mt-5 mb-5 align-items-center justify-content-between'>
      <Col></Col>
      <Col lg={6}>
        <h3 className='mb-3'>Welcone To <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum quam magnam fuga. Blanditiis at, laudantium voluptatibus quod impedit animi esse, amet quaerat natus error aliquam cum, dolores perferendis architecto.</p>
        <Link to={'/Home'}><button className='btn btn-info mt-5 fw-bolder'>Get Started</button></Link>
      </Col>
      <Col></Col>
      <Col lg={4}>
        <img className='img-fluid ms-5 ps-5 w-75 h-100' src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" alt="landig" />
      </Col>
    </Row>

    <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column">
      <h3>Features</h3>
      <div className="cards mt-3 d-flex justify-content-between w-100 align-items-center">
      <Card className='p-3'  style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/animation/2022/08/31/01/18/01-18-22-555_512.gif" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3'  style={{ width: '22rem' }}>
      <Card.Img className='w-100 h-100' variant="top" src="https://media.tenor.com/5FmfYNNPcwQAAAAM/dance-music.gif" />
      <Card.Body>
        <Card.Title>Categorise Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3'  style={{ width: '22rem' }}>
      <Card.Img  variant="top" src="https://i.gifer.com/Yzg5.gif" />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>

    <div className="container mt-5 mb-5 d-flex justify-content-between w-100 border p-5 border-secondary rounded align-items-center">
      <div className='content'>
        <h3 className='text-warning mb-3'>Simple, Fast and Powerful</h3>
        <h6 className='mt-4'><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aperiam in assumenda voluptas? Ipsa, possimus reprehenderit. Ut reiciendis libero est exercitationem neque, perferendis dolor nemo non! Amet officiis atque beatae.
        </h6>

        <h6 className='mt-4'><span className='fs-5 fw-bolder'>Categorise Video</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aperiam in assumenda voluptas? Ipsa, possimus reprehenderit. Ut reiciendis libero est exercitationem neque, perferendis dolor nemo non! Amet officiis atque beatae.
        </h6>

        <h6 className='mt-4'><span className='fs-5 fw-bolder'>Managing History</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aperiam in assumenda voluptas? Ipsa, possimus reprehenderit. Ut reiciendis libero est exercitationem neque, perferendis dolor nemo non! Amet officiis atque beatae.
        </h6>
      </div>
      <div className='video ms-5 w-100 h-100'>
      <iframe width="300" height="491" src="https://www.youtube.com/embed/nGeHstBtoH0" title="Anirudh&#39;s Rocking Performance of Hukum | Jailer Audio Launch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    
    </>
  )
}

export default LandingPage