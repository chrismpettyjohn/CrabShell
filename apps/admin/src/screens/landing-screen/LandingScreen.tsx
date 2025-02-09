import { onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { useAuth } from "@crabshell/shared-web";

export function LandingScreen() {
  const { user } = useAuth();
  const navigate = useNavigate();

  onMount(() => {
    navigate(user() ? "/dashboard" : "/login", { replace: true });
  });

  return null;
}

export default LandingScreen;
