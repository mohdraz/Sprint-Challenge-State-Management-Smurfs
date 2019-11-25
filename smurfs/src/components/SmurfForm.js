import React, { useState } from "react";
import { addSmurf } from "../actions";

const SmurfForm = props => {
  const [name, setName, nameHandle] = useInput();
  const [age, setAge, ageHandle] = useInput();
  const [height, setHeight, heightHandle] = useInput();

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf({ name, age, height });
    setName("");
    setAge("");
    setHeight("");
  };
  return (
    <div>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={nameHandle}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={ageHandle}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          onChange={heightHandle}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SmurfForm;

const useInput = () => {
  const [value, setValue] = useState("");
  const handleChange = e => {
    setValue(e.target.value);
  };

  return [value, setValue, handleChange];
};
