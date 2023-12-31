import React from "react";
import Accordion from "react-bootstrap/Accordion";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Deleteemail } from "../../store/sent-actions";
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "grey" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const ShowSentMails = (props) => {
  const dispatch = useDispatch();

  if (props.sent === "receive" || props.sent === "undefined") {
    return;
  }

  const deletehandler = async () => {
    const add = {
      id: props.id,
    };

    dispatch(Deleteemail(add));
  };

  return (
    <div>
      <Accordion>
        <Card>
          <Card.Header
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <CustomToggle eventKey="0">Open me!</CustomToggle>

            <CardHeader
              style={{
                background: "pink",
                borderRadius: "8px",
                padding: "5px",
              }}
            >
              Subject:-{props.subject}{" "}
            </CardHeader>
            <CardHeader
              style={{
                background: "pink",
                borderRadius: "8px",
                padding: "5px",
              }}
            >
              To:-{props.email}
            </CardHeader>
            <CardHeader
              style={{
                background: "pink",
                borderRadius: "8px",
                padding: "5px",
              }}
            >
              Date:-{props.date}
            </CardHeader>
            <Button onClick={deletehandler}>Delete</Button>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{props.text}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default ShowSentMails;
