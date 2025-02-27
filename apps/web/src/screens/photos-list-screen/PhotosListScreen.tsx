import { createSignal, onMount, Show, type Component } from "solid-js";
import { SiteTitle } from "@crabshell/shared-web";
import { photoService, PhotoWire } from "@crabshell/public-client";
import { UserLayout } from "../../components/user-layout/UserLayout";

const PhotosListScreen: Component = () => {
  const [photos, setPhotos] = createSignal<PhotoWire[]>([]);

  onMount(async () => {
    const response = await photoService.getAll();
    setPhotos(response);
  });

  return (
    <UserLayout>
      <SiteTitle>Photos</SiteTitle>
      <main>
        <Show when={!!photos().length} fallback={<i class="fa fa-spinner fa-spin" />}>
          <div class="main-content news-photo-page">issa list</div>
        </Show>
      </main>
    </UserLayout>
  );
};

export default PhotosListScreen;
