// components/CustomDatePicker.tsx
"use client";

import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon } from "@radix-ui/react-icons";
import { vi } from "date-fns/locale/vi";

import "../datepickercss.css";

registerLocale("vi", vi);


export default function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const years = range(getYear(new Date()) - 6, getYear(new Date()) + 6, 1);
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  return (
    <DatePicker
      locale="vi"
      showIcon
      icon={<CalendarIcon className="text-cyan-800" />} // đổi icon ở đây
      dateFormat={"eeee, d MMMM yyyy"}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }: {
        date: Date;
        changeYear: (year: number) => void;
        changeMonth: (month: number) => void;
        decreaseMonth: () => void;
        increaseMonth: () => void;
        prevMonthButtonDisabled: boolean;
        nextMonthButtonDisabled: boolean;
      }) => (
        <div
          style={{
            width: '100%',
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <button
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}>
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(Number(value))}
            style={{
              width: '30%',
              borderRadius: '2px',
              borderColor: '#6c6c6c',
              padding: '4px 0',
              color: '#2c2c2c',
              borderWidth: '1px',
            }}
          >
            {years.map((option: any) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
            style={{
              width: '30%',
              borderRadius: '2px',
              borderColor: '#6c6c6c',
              padding: '4px 0',
              color: '#2c2c2c',
              borderWidth: '1px',
            }}
          >
            {months.map((option) => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>

          <button
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      )}
      selected={selectedDate}
      onChange={(date: Date | null) => date && setSelectedDate(date)}
    />
  );
}
