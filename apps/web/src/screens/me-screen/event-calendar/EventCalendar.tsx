import { createEffect, createSignal, onMount, Show } from "solid-js";
import { Calendar } from "../../../components/calendar/Calendar";
import { eventsService, EventWire } from "@crabshell/public-client";
import { getMonthDateYear, getTime } from "../../../App.util";
import { A } from "@solidjs/router";

export function EventCalendar() {
  const [currentDate, setCurrentDate] = createSignal(new Date());
  const [selectedDate, setSelectedDate] = createSignal(new Date());
  const [events, setEvents] = createSignal<EventWire[]>();

  createEffect(async () => {
    setEvents(undefined);
    const date = getMonthDateYear(selectedDate());
    const response = await eventsService.getByDate(date);
    setEvents(response);
  });

  const navigate = (dir: any) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + dir);
      setSelectedDate(newDate);
      return newDate;
    });
  };

  return (
    <div class="calendar-container" style="height:100%;">
      <Calendar date={currentDate()} selectedDate={selectedDate()} onNavigate={navigate} onDateSelect={setSelectedDate} />
      <div class="event-plan">
        <h3>Events on {getMonthDateYear(selectedDate())}</h3>
        <Show when={events() !== undefined} fallback={<i class="fa fa-spinner fa-spin" />}>
          {events()?.map((_) => (
            <div class="event">
              <span class="time">{getTime(new Date(_.startsAt * 1000))}</span>
              <div class="details">
                <h4>{_.title}</h4>
                <p>{_.content}</p>
                <div style="text-align:right;">
                  Hosted by&nbsp;
                  <A href={`/profile/${_.user.username}`}>
                    <b class="text-brand">{_.user.username}</b>
                  </A>
                </div>
              </div>
            </div>
          ))}
          <Show when={events()?.length === 0}>There are no events</Show>
        </Show>
      </div>
    </div>
  );
}
