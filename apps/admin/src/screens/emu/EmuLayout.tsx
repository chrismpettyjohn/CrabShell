import { JSX } from "solid-js";
import { UserLayout } from "../../components/user-layout/UserLayout";
import { A } from "@solidjs/router";

export interface EmuLayoutProps {
  children: JSX.Element;
}

export function EmuLayout({ children }: EmuLayoutProps) {
  return (
    <UserLayout>
      <div style="display:flex;justify-content:center;align-items:center;gap:14px;width:100%;">
        <A href="/emulator/settings">
          <i class="fa fa-wrench" style="margin-right: 8px;" />
          Settings
        </A>
        <A href="/emulator/texts">
          <i class="fa fa-font" style="margin-right: 8px;" />
          Texts
        </A>
      </div>
      <br />
      {children}
    </UserLayout>
  );
}
