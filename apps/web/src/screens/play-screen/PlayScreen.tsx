import { createSignal, onMount, type Component } from "solid-js";
import { SiteTitle, UserGuard } from "@crabshell/shared-web";
import { NITRO_URL } from "../../App.const";
import { authService } from "@crabshell/public-client";
import { FindRetrosGuard } from "../../components/findretros-guard/FindRetrosGuard";

const PlayScreen: Component = () => {
  const [sso, setSSO] = createSignal();

  onMount(async () => {
    const response = await authService.generateSSO();
    setSSO(response);
  });

  return (
    <UserGuard>
      <SiteTitle>Play</SiteTitle>
      <FindRetrosGuard>
        {sso() ? (
          <iframe
            style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"
            src={`${NITRO_URL}?sso=${sso()}`}
          />
        ) : (
          <p>Signing in...</p>
        )}
      </FindRetrosGuard>
    </UserGuard>
  );
};

export default PlayScreen;
