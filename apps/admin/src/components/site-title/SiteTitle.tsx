import { onMount } from "solid-js";

export interface SiteTitleProps {
  children: string;
}

export function SiteTitle({ children }: SiteTitleProps) {
  onMount(() => {
    document.title = `CrabShell - ${children}`;
  });

  return null;
}
