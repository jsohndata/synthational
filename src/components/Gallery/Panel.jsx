import { useState } from "react";
import { Col,Image, Modal, Button } from "react-bootstrap";

export default function Panel ({ data: {id, cover, large}}) {

  // const sizeThumb = "300/400";
  // xs={4} md={3} lg={2}

  // const sizeThumb = "400/300";
  // xs={6} md={4} lg={3} xl={2}

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col xs={4} md={3} lg={1} className="m-0 p-0 column">
      <Image 
        alt={id}
        src={`${cover}`} 
        fluid
        className="button-effect"
        onClick={handleShow} />

        <Modal show={show} onHide={handleClose} className="backdrop-effect">
          <Image 
          alt={id}
          src={`${large}`} 
          fluid
          onClick={handleShow} />
        </Modal>
    </Col>
  )
}