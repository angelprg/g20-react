import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostForm from "./PostForm";
import NavBar from "./NavBar";
import PostCard from "./PostCard";
import Login from "./Login";

const App = () => {
  return (
    <div style={{ backgroundColor: "rgb(245, 245, 245)" }}>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <h1>Hello Koders</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Login />
          </Col>
        </Row>
        {/* <Row>
          <Col xs={12} md={8}>
            <PostForm />
          </Col>
          <Col xs={12} md={4}>
            <h2>Ayuda:</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <PostCard title="Primer Card" />
            <PostCard title="Segunda Card" />
            <PostCard title="Tercera Card" />
            <PostCard title="Cuarta Card" />
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default App;
