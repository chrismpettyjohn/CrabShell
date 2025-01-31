import { createSignal } from "solid-js";
import { Calendar } from "../../../components/calendar/Calendar";

export function EventCalendar() {
  const [currentDate, setCurrentDate] = createSignal(new Date());
  const [selectedDate, setSelectedDate] = createSignal(new Date());

  const navigate = (dir) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + dir);
      return newDate;
    });
  };

  return (
    <div class="calendar-container">
      <Calendar
        date={currentDate()}
        selectedDate={selectedDate()}
        onNavigate={navigate}
        onDateSelect={setSelectedDate}
      />
      <div class="event-plan">
        <h3>Events on {selectedDate().toDateString()}</h3>
        <div class="event">
          <span class="time">09:00pm</span>
          <div class="details">
            <h4>Prayer Group</h4>
            <p>BYOB. Bring your own Bible.</p>
          </div>
        </div>
        <div class="event">
          <span class="time">11:00am</span>
          <div class="details">
            <h4>Hail Mary Chants</h4>
            <p>Don't worry, we'll repeat a lot.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
