import { JSX } from "solid-js";
import { UserLayout } from "../../components/user-layout/UserLayout";
import { Link, LinkBar } from "../../components/links-bar/LinksBar";

export interface UsersLayoutProps {
  username: string;
  children: JSX.Element;
}

export function UsersLayout({ children, username }: UsersLayoutProps) {
  const USER_LINKS: Link[] = [
    {
      label: "Information",
      href: `/users/${username}`,
    },
    {
      label: "Bans",
      href: `/users/${username}/bans`,
    },
    {
      label: "Sessions",
      href: `/users/${username}/sessions`,
    },
    {
      label: "Rooms",
      href: `/users/${username}/rooms`,
    },
    {
      label: "Camera",
      href: `/users/${username}/camera`,
    },
    {
      label: "Furniture",
      href: `/users/${username}/furniture`,
    },
    {
      label: "Messages",
      href: `/users/${username}/messages`,
    },
  ];
  return (
    <UserLayout>
      <br />
      <LinkBar links={USER_LINKS} />
      {children}
    </UserLayout>
  );
}
