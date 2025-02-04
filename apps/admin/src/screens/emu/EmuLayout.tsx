import { JSX } from "solid-js";
import { UserLayout } from "../../components/user-layout/UserLayout";
import { A } from "@solidjs/router";
import { Link, LinkBar } from "../../components/links-bar/LinksBar";

export interface EmuLayoutProps {
  children: JSX.Element;
}

const EMU_LINKS: Link[] = [
  {
    label: (
      <>
        <i class="fa fa-wrench" style="margin-right: 8px;" />
        Settings
      </>
    ),
    href: "/emulator/settings",
  },
  {
    label: (
      <>
        <i class="fa fa-font" style="margin-right: 8px;" />
        Texts
      </>
    ),
    href: "/emulator/texts",
  },
];

export function EmuLayout({ children }: EmuLayoutProps) {
  return (
    <UserLayout>
      <br />
      <LinkBar links={EMU_LINKS} />
      {children}
    </UserLayout>
  );
}
