import React from "react";
import DataInput from "./DataInput";

const DataRange = () => {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DataInput
        label="inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DataInput
        label="final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DataRange;
