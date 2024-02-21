import { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  console.log(boxes);

  return (
    <div>
      <NewBoxForm setBoxes={setBoxes} boxes={boxes} />
      <br />
      <div>
        {boxes.map((box, i) => (
          <Box
            key={i}
            backgroundColor={box.backgroundColor}
            width={box.width + "px"}
            height={box.height + "px"}
          />
        ))}
      </div>
    </div>
  );
}

export default BoxList;
