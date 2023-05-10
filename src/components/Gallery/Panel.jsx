import { useState } from "react";
import { Col,Image, Modal } from "react-bootstrap";

export default function Panel ( {data: {id, cover, large}} ) {

  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <Col xs={6} sm={4} md={3} lg={2} className="m-0 m-xl-1 p-0 column">
      <Image 
        src={`${cover}`} 
        alt={id}        
        fluid
        className="button-effect"
        onClick={toggleShow} />
      <Modal 
        size="md"
        show={show} 
        onHide={toggleShow} 
        className="backdrop-effect">
          <Image 
            src={`${large}`}             
            alt={id}
            fluid />
      </Modal>
    </Col>
  )
}
