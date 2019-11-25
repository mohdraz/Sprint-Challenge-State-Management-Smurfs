import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const Smurf = props => {
  console.log("this is props: ", props.smurf);
  const { age, height, name } = props.smurf;

  return (
    <Card>
      <CardHeader>Name: {name}</CardHeader>
      <CardBody>
        <CardText>Age: {age}</CardText>
        <CardText>Height: {height}</CardText>
      </CardBody>
    </Card>
  );
};

export default Smurf;
