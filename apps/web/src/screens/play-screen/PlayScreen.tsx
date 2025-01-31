import { createSignal, onMount, type Component } from "solid-js";
import { GuardUser } from "../../components/guard-user/GuardUser";
import { SiteTitle } from "../../components/site-title/SiteTitle";
import { NITRO_URL } from "../../App.const";
import { authService } from "@crabshell/client";

const PlayScreen: Component = () => {
  const [sso, setSSO] = createSignal();

  onMount(async () => {
    const response = await authService.generateSSO();
    setSSO(response);
  });

  return (
    <GuardUser>
      <SiteTitle>Play</SiteTitle>
      {sso() ? (
        <iframe
          style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"
          src={`${NITRO_URL}?sso=${sso()}`}
        />
      ) : (
        <p>Signing in...</p>
      )}
    </GuardUser>
  );
};

export default PlayScreen;
