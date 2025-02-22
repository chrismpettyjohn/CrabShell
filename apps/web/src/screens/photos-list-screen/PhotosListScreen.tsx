import { createSignal, onMount, Show, type Component } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { SiteTitle, UserGuard } from "@crabshell/shared-web";
import { photoService, PhotoWire } from "@crabshell/public-client";

const PhotosListScreen: Component = () => {
  const [photos, setPhotos] = createSignal<PhotoWire[]>([]);

  onMount(async () => {
    const response = await photoService.getAll();
    setPhotos(response);
  });

  return (
    <UserGuard>
      <SiteTitle>Photos</SiteTitle>
      <SiteSidebar />
      <main>
        <Show when={!!photos().length} fallback={<i class="fa fa-spinner fa-spin" />}>
          <div class="main-content news-photo-page">issa list</div>
        </Show>
      </main>
    </UserGuard>
  );
};

export default PhotosListScreen;
