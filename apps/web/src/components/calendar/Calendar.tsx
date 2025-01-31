import { createMemo } from "solid-js";

export interface CalendarProps {
  date: Date;
  selectedDate: Date;
  onNavigate: (direction: number) => void;
  onDateSelect: (date: Date) => void;
}

export function Calendar(props: CalendarProps) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getMonthData = createMemo(() => {
    const date = props.date;
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = new Date().toDateString();
    const selectedDate = props.selectedDate.toDateString();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();

    const days = [];
    const offset = firstDay === 0 ? 6 : firstDay - 1; // Adjust to start on Monday

    for (let i = offset; i > 0; i--) {
      days.push({
        day: prevLastDate - i + 1,
        class: "prev-month",
        fullDate: new Date(year, month - 1, prevLastDate - i + 1),
      });
    }

    for (let i = 1; i <= lastDate; i++) {
      const fullDate = new Date(year, month, i);
      const isToday = fullDate.toDateString() === today ? "today" : "";
      const isSelected =
        fullDate.toDateString() === selectedDate ? "active" : "";
      days.push({ day: i, class: `${isToday} ${isSelected}`, fullDate });
    }

    while (days.length % 7 !== 0) {
      const fullDate = new Date(
        year,
        month + 1,
        days.length - lastDate - offset + 1
      );
      days.push({
        day: days.length - lastDate - offset + 1,
        class: "next-month",
        fullDate,
      });
    }

    return { year, month, days };
  });

  return (
    <>
      <div class="calendar-header">
        <h2>
          {monthNames[getMonthData().month]} {getMonthData().year}
        </h2>
        <div class="navigation">
          <button onClick={() => props.onNavigate(-1)}>&lt;</button>
          <button onClick={() => props.onNavigate(1)}>&gt;</button>
        </div>
      </div>
      <div class="calendar">
        <div class="day-names">
          {daysOfWeek.map((day) => (
            <span>{day}</span>
          ))}
        </div>
        <div class="days">
          {getMonthData().days.map(({ day, class: cls, fullDate }) => (
            <span class={cls} onClick={() => props.onDateSelect(fullDate)}>
              {day}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
