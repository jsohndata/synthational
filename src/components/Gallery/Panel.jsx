import { Col,Image } from "react-bootstrap";

export default function Panel ({ data: {id, name, cover, about, website,}}) {

  return (
    <Col key={id} xs={6} md={3} className="m-0 p-0">
      <Image 
        src={cover} 
        fluid />
    </Col>
  )
}