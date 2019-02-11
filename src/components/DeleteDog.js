import React from "react";

const deleteDog = ({ deleteDog, Id }) => {
  return (
    <div className="poop">
      <button onClick={() => deleteDog(Id)}>Delete Dog</button>
    </div>
  );
};

export default deleteDog;
