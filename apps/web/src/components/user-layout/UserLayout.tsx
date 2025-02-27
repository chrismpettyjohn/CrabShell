import { JSX } from "solid-js";
import { SiteSidebar } from "../site-sidebar/SiteSidebar";
import { UserGuard } from "@crabshell/shared-web";
import { MobileNavigation } from "../mobile-navigation/MobileNavigation";

export interface UserLayoutProps {
  children: JSX.Element;
}

export function UserLayout({ children }: UserLayoutProps) {
  return (
    <UserGuard>
      <div style="display: flex; height: 100%; flex-wrap:wrap; width: 100%;">
        <MobileNavigation />
        <SiteSidebar />
        {children}
      </div>
    </UserGuard>
  );
}
