import { JSX } from "solid-js";
import { SiteSidebar } from "../../components/site-sidebar/SiteSidebar";
import { SiteTitle, UserGuard } from "@crabshell/shared-web";
import { A, useLocation } from "@solidjs/router";

export interface HighScoresLayoutProps {
  children: JSX.Element;
}

const HIGH_SCORE_LINKS: Array<{ label: string; href: string }> = [
  {
    label: "Credits",
    href: "/high-scores/credits",
  },
  {
    label: "Diamonds",
    href: "/high-scores/diamonds",
  },
  {
    label: "Online Time",
    href: "/high-scores/online-time",
  },
  {
    label: "Respect Received",
    href: "/high-scores/respects",
  },
  {
    label: "Achievements",
    href: "/high-scores/achievements",
  },
];

export function HighScoresLayout({ children }: HighScoresLayoutProps) {
  const { pathname } = useLocation();
  return (
    <UserGuard>
      <SiteTitle>High Scores</SiteTitle>
      <SiteSidebar />
      <main>
        <div class="high-scores-page main-content">
          <h1>High Scores</h1>
          <div class="tabs-container">
            {HIGH_SCORE_LINKS.map((_) => (
              <A href={_.href}>
                <span class={_.href === pathname ? "active" : ""}>
                  {_.label}
                </span>
              </A>
            ))}
          </div>
          {children}
        </div>
      </main>
    </UserGuard>
  );
}
