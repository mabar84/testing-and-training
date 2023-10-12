import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");

  const handleChange = (e: any) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <input type="color" value={color} onChange={handleChange} />
      <div
        style={{
          backgroundColor: color,
          width: "700px",
          height: "100px",
          marginTop: "10px",
        }}
      ></div>
    </div>
  );
};

export default ColorPicker;
