import { photoService, PhotoWire } from "@crabshell/public-client";
import { A } from "@solidjs/router";
import { createSignal, onMount, Show } from "solid-js";
import toast from "solid-toast";

export function StoriesSection() {
  const [stories, setStories] = createSignal<PhotoWire[]>([]);

  onMount(async () => {
    try {
      const photos = await photoService.getAll();
      setStories(photos);
    } catch (e: any) {
      toast.error(`Failed to load photos`);
      throw e;
    }
  });

  return (
    <Show when={!!stories().length} fallback="No photos found!">
      <div class="stories-container">
        {stories().map((_) => (
          <A href={`/stories/${_.id}`}>
            <img src={_.imageUrl} className="story" />
          </A>
        ))}
      </div>
    </Show>
  );
}
