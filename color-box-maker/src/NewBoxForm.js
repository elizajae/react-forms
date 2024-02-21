import { useState } from "react";

function NewBoxForm({ setBoxes, boxes }) {
  const [formState, setFormState] = useState({
    width: "",
    height: "",
    backgroundColor: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    setBoxes([...boxes, formState]);
  }

  function handleChange(key, value) {
    setFormState({
      ...formState,
      [key]: value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width</label>
      <input
        type="number"
        required
        id="width"
        name="width"
        value={formState.width}
        onChange={(e) => handleChange("width", e.target.value)}
      />
      <label htmlFor="height">Height</label>
      <input
        required
        type="number"
        id="height"
        name="height"
        value={formState.height}
        onChange={(e) => handleChange("height", e.target.value)}
      />
      <label htmlFor="backgroundColor">Background Color</label>
      <input
        type="text"
        required
        id="backgroundColor"
        name="backgroundColor"
        value={formState.backgroundColor}
        onChange={(e) => handleChange("backgroundColor", e.target.value)}
      />
      <button type="submit">Add a new box</button>
    </form>
  );
}

export default NewBoxForm;
