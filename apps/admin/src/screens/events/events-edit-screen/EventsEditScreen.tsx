import { SiteTitle } from "@crabshell/shared-web";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { EventsEditor } from "../events-editor/EventsEditor";
import {
  AdminEventCreateParams,
  adminEventService,
  AdminEventWire,
} from "@crabshell/admin-client";
import toast from "solid-toast";
import { useParams } from "@solidjs/router";
import { createSignal, onMount, Show } from "solid-js";

export function EventsEditScreen() {
  const params = useParams<{ eventId: string }>();
  const eventId = Number(params.eventId);
  const [event, setEvent] = createSignal<AdminEventWire>();

  onMount(async () => {
    try {
      const response = await adminEventService.getById(eventId);
      setEvent(response);
    } catch (e: any) {
      toast.error(`Failed to load event ${eventId}`);
      throw e;
    }
  });

  async function onSaveChanges(dto: AdminEventCreateParams) {
    try {
      await adminEventService.updateById(eventId, dto);
      toast.success("Successfully updated event");
    } catch (e: any) {
      toast.error("Failed to update event");
      throw e;
    }
  }
  return (
    <UserLayout>
      <SiteTitle>Events - Edit</SiteTitle>
      <h1>Events - Edit</h1>
      <div class="card">
        <Show when={!!event()} fallback={<i class="fa fa-spinner fa-spin" />}>
          <EventsEditor defaultEvent={event()} onSave={onSaveChanges} />
        </Show>
      </div>
    </UserLayout>
  );
}

export default EventsEditScreen;
