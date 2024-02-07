import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import { SERVER_URL } from "../Services/serverUrl";

function ProjectCard({ project }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {project&& (
        <Card className="mt-5" onClick={handleShow} style={{ width: "28rem" }}>
          <Card.Img
            width={300}
            height={300}
            className="border border-5  border-white w-100 "
            variant="top"
            src={`${SERVER_URL}/uploads/${project?.projectImage}`}
          />
          <Card.Body>
            <Card.Title className="text-center fw-bolder ">
              {project?.title}
            </Card.Title>
          </Card.Body>
        </Card>
      )}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{project?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img
                width={300}
                height={300}
                className="img-fluid"
                src={`${SERVER_URL}/uploads/${project?.projectImage}`}
                alt=""
              />
            </Col>
            <Col md={6}>
              <h2 className="fw-bolder text-dark">{project?.title}</h2>
              <p>
                Project Overview:
                <span style={{ textAlign: "justify" }} className="fw-bolder">
                  {project?.overview}
                </span>
              </p>
              <p>
                Language Used:
                <span className="fw-bolder text-danger">
                  {project?.languages}
                </span>
              </p>
            </Col>
          </Row>
          <div className="mt-3">
            <a href={project?.github} target="_blank" className="btn me-1">
              <i
                style={{ height: "40px" }}
                class="fa-brands fa-github fa-2x overflow-hidden"
              ></i>
            </a>
            <a href={project?.website} target="_blank" className="btn">
              <i
                style={{ height: "40px" }}
                class="fa-solid fa-link fa-2x overflow-hidden "
              ></i>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCard;
