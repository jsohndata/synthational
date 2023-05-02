import { useState } from "react";
import { Col,Image, Modal, Button } from "react-bootstrap";

export default function Panel ({ data: {id, name, cover, about, website,}}) {

  const sizeThumb = "300/400";
  // xs={4} md={3} lg={2}

  // const sizeThumb = "400/300";
  // xs={6} md={4} lg={3} xl={2}
  const sizeModal = "900/1200";

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col key={id} xs={4} md={3} lg={1} className="m-0 p-0 column">
      <Image 
        alt={id}
        src={`${cover}${sizeThumb}`} 
        fluid
        className="button-effect"
        onClick={handleShow} />

        <Modal show={show} onHide={handleClose} className="backdrop-effect">
          <Image 
          alt={id}
          src={`${cover}${sizeModal}`} 
          fluid
          onClick={handleShow} />
        </Modal>
    </Col>
  )
}