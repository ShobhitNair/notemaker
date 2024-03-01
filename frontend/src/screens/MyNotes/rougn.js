import React from "react";
import { Accordion, Card, Badge, Button } from "react-bootstrap";

const MyNotes = ({ notes, deleteHandler, ModelShow }) => {
  return (
    <>
      {/* Accordion with default layout */}
      <Accordion defaultActiveKey="0">
        {notes.map((note) => (
          <Accordion.Item key={note._id} eventKey={note._id}>
            <Accordion.Header>{note.title}</Accordion.Header>
            <Accordion.Body>
              <Badge bg="success">Category - {note.category}</Badge>
              <blockquote className="blockquote mb-0">
                <p className="fs-6 mt-2">{note.content}</p>
                <footer style={{ fontSize: 14, opacity: 0.5 }}>
                  Created on - {note.createdAt.substring(0, 10)}
                </footer>
              </blockquote>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      {/* Accordion with card-based layout */}
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                onClick={() => ModelShow(note)}
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                  {note.title}
                </Accordion.Toggle>
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Badge bg="success">Category - {note.category}</Badge>
                <blockquote className="blockquote mb-0">
                  <p className="fs-6 mt-2">{note.content}</p>
                  <footer style={{ fontSize: 14, opacity: 0.5 }}>
                    Created on - {note.createdAt.substring(0, 10)}
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}

      {/* Accordion with flex layout */}
      <Accordion defaultActiveKey="0">
        {notes.map((note) => (
          <Accordion.Item key={note._id} eventKey={note._id}>
            <Accordion.Header>
              <div className="d-flex justify-content-center">
                <div className="me-5">
                  <span>{note.title}</span>
                </div>
                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <Badge bg="success">Category - {note.category}</Badge>
              <blockquote className="blockquote mb-0">
                <p className="fs-6 mt-2">{note.content}</p>
                <footer style={{ fontSize: 14, opacity: 0.5 }}>
                  Created on - {note.createdAt.substring(0, 10)}
                </footer>
              </blockquote>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default MyNotes;
