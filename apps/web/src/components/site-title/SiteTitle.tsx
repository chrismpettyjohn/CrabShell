import { onMount } from "solid-js";
import { SITE_NAME } from "../../App.const";

export interface SiteTitleProps {
  children: string;
}

export function SiteTitle({ children }: SiteTitleProps) {
  onMount(() => {
    document.title = `${SITE_NAME} - ${children}`;
  });

  return null;
}
