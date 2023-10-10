import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Landingpage() {

  const navigateByUrl=useNavigate()
  const navigate=()=>{
    navigateByUrl('/home')
  }
  return (
    <>
    <Row className='mt-5 mb-5 align-items-center justify-content-between'>
      <Col>

      </Col>
      <Col lg={4}>
        <h3 className='mb-3'> Welcome to<span className='text-warning'> Media Player</span></h3>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio veritatis quod dolorem tempora explicabo eum, quae dolore totam aliquam inventore sunt ut itaque error quasi dicta! Iusto, ex eum!</p>
        <button onClick={navigate} className='btn btn-info mt-5 fw-bolder'>Get Started</button>
      </Col>
      <Col>
      </Col>
      <Col className='ps-5' lg={6}>
        <img className='img-fluid ms-5 ps-5' src="https://media.tenor.com/ola0KAnghjUAAAAd/playing-tabla-thala.gif" alt="" />
      </Col>

    </Row>
    <div className="container mt-5 mb-5 d-flex justify-content-center align-items center flex-column">
  <h3>Features</h3>
  <div className="cards mt-5 d-flex justify-content-evenly w-100 align-items-center">
  <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://clipart-library.com/images/pc7reEGKi.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.gifer.com/VR0F.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

    </div>
    <div className="container mt-5 mb-5 d-flex justify-content-between w-100 border p-5 border-secondary rounded align-items-center">

      <div className="content">

        <h3 className="text-warning mb-5">Simple.Fast and POwerful</h3>
        <h6><span className='fs-5 fw-bolder'>Play everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias quasi? Modi, eveniet provident iste explicabo ab consequuntur a placeat nihil beatae eligendi molestias non saepe tempora mollitia maxime voluptas.</h6>
        <h6 className='mt-4'><span className='fs-5 fw-bolder'>Play everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias quasi? Modi, eveniet provident iste explicabo ab consequuntur a placeat nihil beatae eligendi molestias non saepe tempora mollitia maxime voluptas.</h6>
        <h6 className='mt-4'><span className='fs-5 fw-bolder'>Play everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias quasi? Modi, eveniet provident iste explicabo ab consequuntur a placeat nihil beatae eligendi molestias non saepe tempora mollitia maxime voluptas.</h6>
      </div>
      <div className='video ms-5'>

      <iframe width="689" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen  ></iframe>
      </div>
    </div>
    </>
  )
}

export default Landingpage