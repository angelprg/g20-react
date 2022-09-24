import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import { useUser } from "../contexts/UserContext";
import Image from "react-bootstrap/Image";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const { user } = useUser();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Menú
      </Button>
      <Image
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/898739/6eb1ed6a-8535-4d1f-a75e-c31d5668cf1a.jpeg"
        roundedCircle
        width={30}
        height={30}
      />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>DEV Community 👩‍💻👨‍💻</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item bsPrefix="tests">
              {user?.token ? `Bienvenido ${user?.name}` : "Inicia sesión"}
            </ListGroup.Item>
            <ListGroup.Item bsPrefix="test">Listings</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
