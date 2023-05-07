import { useState } from "react";
import { Col,Image, Modal } from "react-bootstrap";

export default function Panel ({ data: {id, cover, large}}) {

  // "300/400"
  // xs={4} md={3} lg={2}

  // "400/300";
  // xs={6} md={4} lg={3} xl={2}

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col xs={6} sm={4} md={3} lg={2} xl={2} className="m-0 m-xl-1 p-0 column">
      <Image 
        src={`${cover}`} 
        alt={id}        
        fluid
        className="button-effect"
        onClick={handleShow} />
        
      <Modal 
        size="md"
        show={show} 
        onHide={handleClose} 
        className="backdrop-effect">
          <Image 
            src={`${large}`}             
            alt={id}
            fluid
            onClick={handleShow} />
      </Modal>
    </Col>
  )
}