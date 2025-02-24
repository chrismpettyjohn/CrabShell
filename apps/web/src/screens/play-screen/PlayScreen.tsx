import { createSignal, onMount, Show, type Component } from "solid-js";
import { SiteTitle, UserGuard } from "@crabshell/shared-web";
import { NITRO_URL } from "../../App.const";
import { authService } from "@crabshell/public-client";
import { FindRetrosGuard } from "../../components/findretros-guard/FindRetrosGuard";
import { A } from "@solidjs/router";
import { useOnlineUsers } from "../../context/OnlineUsersContext";

const PlayScreen: Component = () => {
  const [sso, setSSO] = createSignal<String>();
  const { onlineUsers } = useOnlineUsers();

  onMount(async () => {
    const response = await authService.generateSSO();
    setSSO(response);
  });

  return (
    <UserGuard>
      <SiteTitle>Play</SiteTitle>
      <FindRetrosGuard>
        <Show
          when={!!sso()}
          fallback={
            <>
              <i class="fa fa-spinner fa-spin" style="margin-right: 8px;" /> Signing In...
            </>
          }
        >
          <div class="client-page">
            <div class="client-controls">
              <A href="/online">
                <i class="fa fa-users" />
                <b>{onlineUsers().length} </b>online
              </A>
            </div>
            <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;" src={`${NITRO_URL}?sso=${sso()}`} />
          </div>
        </Show>
      </FindRetrosGuard>
    </UserGuard>
  );
};

export default PlayScreen;
