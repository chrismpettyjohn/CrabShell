import { JSX } from "solid-js";
import { UserLayout } from "../../components/user-layout/UserLayout";
import { Link, LinkBar } from "../../components/links-bar/LinksBar";

export interface RankLayoutProps {
  children: JSX.Element;
  rankId: number;
}

export function RankLayout({ children, rankId }: RankLayoutProps) {
  const RANK_LINKS: Link[] = [
    {
      label: "Information",
      href: `/ranks/${rankId}`,
    },
    {
      label: "Members",
      href: `/ranks/${rankId}/members`,
    },
  ];
  return (
    <UserLayout>
      <br />
      <LinkBar links={RANK_LINKS} />
      {children}
    </UserLayout>
  );
}
