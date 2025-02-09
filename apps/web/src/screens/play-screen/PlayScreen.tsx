import { createSignal, onMount, Show, type Component } from "solid-js";
import { SiteTitle, UserGuard } from "@crabshell/shared-web";
import { NITRO_URL } from "../../App.const";
import { authService } from "@crabshell/public-client";
import { FindRetrosGuard } from "../../components/findretros-guard/FindRetrosGuard";

const PlayScreen: Component = () => {
  const [sso, setSSO] = createSignal<String>();

  onMount(async () => {
    const response = await authService.generateSSO();
    console.log(response);
    setSSO(response);
  });

  console.log(sso());

  return (
    <UserGuard>
      <SiteTitle>Play</SiteTitle>
      <FindRetrosGuard>
        <Show
          when={!!sso()}
          fallback={
            <>
              <i class="fa fa-spinner fa-spin" style="margin-right: 8px;" />{" "}
              Signing In...
            </>
          }
        >
          <iframe
            style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"
            src={`${NITRO_URL}?sso=${sso()}`}
          />
        </Show>
      </FindRetrosGuard>
    </UserGuard>
  );
};

export default PlayScreen;
