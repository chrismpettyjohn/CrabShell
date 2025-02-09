import { createEffect, createSignal, onMount, Show } from "solid-js";
import { Calendar } from "../../../components/calendar/Calendar";
import { eventsService, EventWire } from "@crabshell/public-client";
import { getMonthDateYear } from "../../../App.util";

export function EventCalendar() {
  const [currentDate, setCurrentDate] = createSignal(new Date());
  const [selectedDate, setSelectedDate] = createSignal(new Date());
  const [events, setEvents] = createSignal<EventWire[]>();

  createEffect(async () => {
    setEvents(undefined);
    const response = await eventsService.getByDate(
      getMonthDateYear(selectedDate())
    );
    setEvents(response);
  }, [selectedDate]);

  const navigate = (dir) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + dir);
      return newDate;
    });
  };

  return (
    <div class="calendar-container" style="height:100%;">
      <Calendar
        date={currentDate()}
        selectedDate={selectedDate()}
        onNavigate={navigate}
        onDateSelect={setSelectedDate}
      />
      <div class="event-plan">
        <h3>Events on {getMonthDateYear(selectedDate())}</h3>
        <Show
          when={events() !== undefined}
          fallback={<i class="fa fa-spinner fa-spin" />}
        >
          {events()?.map((_) => (
            <div class="event">
              <span class="time">09:00pm</span>
              <div class="details">
                <h4>Prayer Group</h4>
                <p>BYOB. Bring your own Bible.</p>
              </div>
            </div>
          ))}
          <Show when={events()?.length === 0}>There are no events</Show>
        </Show>
      </div>
    </div>
  );
}
