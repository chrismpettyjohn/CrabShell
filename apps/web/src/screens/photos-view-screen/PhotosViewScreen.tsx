import { createSignal, onMount, Show, type Component } from "solid-js";
import { SiteTitle } from "@crabshell/shared-web";
import { photoService, PhotoWire } from "@crabshell/public-client";
import { useParams } from "@solidjs/router";
import { IMAGER_BASE_URL } from "../../App.const";
import { UserLayout } from "../../components/user-layout/UserLayout";

const PhotosViewScreen: Component = () => {
  const params: { photoId: string } = useParams();
  const [photo, setPhoto] = createSignal<PhotoWire>();

  onMount(async () => {
    const response = await photoService.getById(Number(params.photoId));
    setPhoto(response);
  });

  return (
    <UserLayout>
      <SiteTitle>Photos</SiteTitle>
      <main>
        <div class="main-content news-photo-page">
          <div class="card" style={{ height: "calc(100% - 140px)" }}>
            <Show when={photo()} fallback={<i class="fa fa-spinner fa-spin" />}>
              <img src={photo()?.imageUrl} style="object-fit:cover;height:100%;width:100%;" />
            </Show>
          </div>
          <br />
          <div class="card" style="height:fit-content;display:flex;justify-content:space-between;align-items:center;">
            <div style="display:flex;">
              <img class="avatar" src={`${IMAGER_BASE_URL}?figure=${photo()?.user?.look}&headonly=1`} style="object-fit: contain; height: 65px" />
              <div style="margin-top:12px;">
                <div style="margin-bottom:8px;">Posted by:</div>
                <h2>{photo()?.user?.username}</h2>
              </div>
            </div>
            <div>{photo()?.user?.rank?.name}</div>
          </div>
        </div>
      </main>
    </UserLayout>
  );
};

export default PhotosViewScreen;
