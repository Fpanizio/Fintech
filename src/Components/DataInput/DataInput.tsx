import React from "react";
import "./DataInput.css";

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

const DataInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label className="gerenalStylem labelStyle" htmlFor={label}>
        {label}
      </label>
      <input
        className="gerenalStylem inputStyle"
        id={label}
        name={label}
        type="date"
        {...props}
      />
    </div>
  );
};

export default DataInput;
