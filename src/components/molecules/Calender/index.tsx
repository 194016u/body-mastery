import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.scss";

type ValuePiece = any | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const Calender = () => {
  const [value, onChange] = useState<Value>(new Date());
  const selectedDates: Date[] = [];

  useEffect(() => {
    if (Array.isArray(value)) {
      const [startDate, endDate] = value;
      for (
        let d = new Date(startDate);
        d <= endDate;
        d.setDate(d.getDate() + 1)
      ) {
        selectedDates.push(new Date(d));
      }
    }
  }, [value]);

  useEffect(() => {
    console.log(selectedDates);
  }, [selectedDates]);

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        className="custom-calendar"
        selectRange={true}
        minDate={new Date()}
      />
    </div>
  );
};
