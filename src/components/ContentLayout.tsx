import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { AdSlot } from "@/components/ads/AdSlot";

export function ContentLayout({
  children,
  sidebar = true,
}: {
  children: ReactNode;
  sidebar?: boolean;
}) {
  return (
    <div className="content-shell">
      <SiteHeader />
      <div className="content-shell__body">
        <main className="content-main">{children}</main>
        {sidebar ? (
          <aside className="content-sidebar" aria-label="Sidebar">
            <AdSlot slot="sidebar160x600" className="ad-sidebar" />
            <AdSlot slot="sidebar160x300" className="ad-sidebar" />
          </aside>
        ) : null}
      </div>
      <AdSlot slot="content468x60" className="ad-between" />
      <SiteFooter />
    </div>
  );
}