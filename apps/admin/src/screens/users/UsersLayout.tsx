import { JSX } from "solid-js";
import { UserLayout } from "../../components/user-layout/UserLayout";
import { Link, LinkBar } from "../../components/links-bar/LinksBar";

export interface UsersLayoutProps {
  userId: number;
  children: JSX.Element;
}

export function UsersLayout({ children, userId }: UsersLayoutProps) {
  const USER_LINKS: Link[] = [
    {
      label: "Information",
      href: `/users/${userId}`,
    },
    {
      label: "Bans",
      href: `/users/bans/${userId}`,
    },
    {
      label: "Sessions",
      href: `/users/sessions/${userId}`,
    },
    {
      label: "Rooms",
      href: `/users/rooms/${userId}`,
    },
    {
      label: "Furniture",
      href: `/users/furniture/${userId}`,
    },
    {
      label: "Messages",
      href: `/users/messages/${userId}`,
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
