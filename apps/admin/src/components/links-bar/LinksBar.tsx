import { A, useLocation } from "@solidjs/router";
import { JSX } from "solid-js";

export interface Link {
  label: JSX.Element;
  href: string;
}

export interface LinkBarProps {
  links: Link[];
}

export function LinkBar({ links }: LinkBarProps) {
  const location = useLocation();

  return (
    <div class="links-container">
      {links.map((link) => (
        <A href={link.href}>
          <span class={location.pathname === link.href ? "active" : ""}>
            {link.label}
          </span>
        </A>
      ))}
    </div>
  );
}
