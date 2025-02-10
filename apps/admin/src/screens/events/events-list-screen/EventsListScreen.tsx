import { A } from "@solidjs/router";
import { IMAGER_BASE_URL } from "../../../App.const";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { createSignal, onMount, Show } from "solid-js";
import { adminEventService, AdminEventWire } from "@crabshell/admin-client";
import toast from "solid-toast";
import {
  SiteTitle,
  IntegratedTable,
  ITableColumn,
} from "@crabshell/shared-web";
import { getFormattedDateTime } from "../../../App.util";

export function EventsListScreen() {
  const [events, setEvents] = createSignal<AdminEventWire[]>([]);

  onMount(async () => {
    try {
      const response = await adminEventService.getAll();
      setEvents(response);
    } catch (e) {
      toast.error("Failed to fetch events");
    }
  });

  const columns: ITableColumn<AdminEventWire>[] = [
    {
      key: "userId",
      header: "User",
      selector: (row) => row.user?.username ?? row.userId,
      customRender: (_: string, row: AdminEventWire) => (
        <A
          href={`/events/${row.id}`}
          onClick={(e) => e.stopPropagation()}
          style="display:flex;align-items:center;"
        >
          <Show when={!!row.user} fallback={_}>
            <img
              class="avatar"
              src={`${IMAGER_BASE_URL}?figure=${row.user?.look}&headonly=1`}
              style="object-fit: contain; height: 65px"
            />
            {_}
          </Show>
        </A>
      ),
      sortable: true,
    },
    {
      key: "title",
      header: "Title",
      selector: (row) => row.title,
      customRender: (title: string, row: AdminEventWire) => (
        <A href={`/events/${row.id}`}>{title}</A>
      ),
      sortable: true,
      filterable: true,
    },
    {
      key: "startsAt",
      header: "Starts At",
      selector: (row) => row.startsAt,
      customRender: (startsAt: number) =>
        getFormattedDateTime(new Date(startsAt * 1000)),
      sortable: true,
      filterable: true,
    },
    {
      key: "endsAt",
      header: "Ends At",
      selector: (row) => row.endsAt,
      customRender: (endsAt: number) =>
        getFormattedDateTime(new Date(endsAt * 1000)),
      sortable: true,
      filterable: true,
    },
    {
      key: "createdAt",
      header: "Created At",
      selector: (row) => row.createdAt,
      customRender: (createdAt: number) =>
        getFormattedDateTime(new Date(createdAt * 1000)),
      sortable: true,
      filterable: true,
    },
    {
      key: "updatedAt",
      header: "Updated At",
      selector: (row) => row.updatedAt,
      customRender: (updatedAt: number) =>
        getFormattedDateTime(new Date(updatedAt * 1000)),
      sortable: true,
      filterable: true,
    },
  ];

  return (
    <UserLayout>
      <SiteTitle>Events</SiteTitle>
      <div style="display:flex;justify-content:space-between;margin-bottom:14px;width:100%;">
        <h1>Events</h1>
        <A href="/events/create">
          <button>
            <i class="fa fa-plus-circle" style="margin-right: 8px;" />
            Create
          </button>
        </A>
      </div>
      <div class="card">
        <IntegratedTable
          columns={columns}
          rows={events}
          getRowId={(row) => `${row.id}`}
        />
      </div>
    </UserLayout>
  );
}

export default EventsListScreen;
