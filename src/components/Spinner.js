import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div>
      <img src={loading} alt="loading" height={100} width={100} />
    </div>
  );
};
export default Spinner;
