import React from "react";

function Timestamp() {
  const timestamp = new Date().toLocaleString();
  return (
    <>
      <footer>{`Page rendered on ${timestamp}`}</footer>
    </>
  );
}

export default Timestamp;
