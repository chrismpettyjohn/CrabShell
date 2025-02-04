import { JSX } from "solid-js";
import { UserLayout } from "../../components/user-layout/UserLayout";
import { Link, LinkBar } from "../../components/links-bar/LinksBar";

const LOGGING_LINKS: Link[] = [
  {
    label: "Commands",
    href: "/logs/commands",
  },
  {
    label: "Name Changes",
    href: "/logs/namechange",
  },
  {
    label: "Public Messages",
    href: "/logs/public-chat",
  },
  {
    label: "Private Messages",
    href: "/logs/private-chat",
  },
  {
    label: "Room Enters",
    href: "/logs/room-enters",
  },
  {
    label: "Room Trades",
    href: "/logs/room-trades",
  },
];

export interface LoggingLayoutProps {
  children: JSX.Element;
}
export function LoggingLayout({ children }: LoggingLayoutProps) {
  return (
    <UserLayout>
      <div class="card">
        <LinkBar links={LOGGING_LINKS} />
        <br />
        {children}
      </div>
    </UserLayout>
  );
}
