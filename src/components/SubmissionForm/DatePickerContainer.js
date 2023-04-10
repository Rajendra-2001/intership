
import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import "./DatePickerContainer.css"
import "react-datepicker/dist/react-datepicker.css";

function DatePickerContainer() {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };

  return (
    <div>
      <DatePicker selected={startDate} onChange={handleChange} />
    </div>
  );
}

export default DatePickerContainer;

