import { onMount } from "solid-js";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "@solidjs/router";

export function LandingScreen() {
  const { user } = useAuth();
  const navigate = useNavigate();

  onMount(() => {
    navigate(user() ? "/me" : "/login", { replace: true });
  });

  return null;
}

export default LandingScreen;
