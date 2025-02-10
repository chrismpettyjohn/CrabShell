import { SiteTitle } from "@crabshell/shared-web";
import { UserLayout } from "../../../components/user-layout/UserLayout";
import { EventsEditor } from "../events-editor/EventsEditor";
import {
  AdminEventCreateParams,
  adminEventService,
} from "@crabshell/admin-client";
import toast from "solid-toast";
import { useNavigate } from "@solidjs/router";

export function EventsCreateScreen() {
  const navigate = useNavigate();

  async function onSaveChanges(dto: AdminEventCreateParams) {
    try {
      const response = await adminEventService.create(dto);
      toast.success("Successfully created event");
      navigate(`/events/${response.id}`);
    } catch (e: any) {
      toast.error("Failed to create event");
      throw e;
    }
  }

  return (
    <UserLayout>
      <SiteTitle>Events - Create</SiteTitle>
      <h1>Events - Create</h1>
      <div class="card">
        <EventsEditor onSave={onSaveChanges} />
      </div>
    </UserLayout>
  );
}

export default EventsCreateScreen;
