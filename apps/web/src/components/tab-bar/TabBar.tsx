import { JSX } from "solid-js";

export interface Tab {
  label: string;
  view: () => JSX.Element;
}
export interface TabBarProps {
  activeTab: () => Tab;
  setTab: (newTab: Tab) => void;
  tabs: Tab[];
}

export function TabBar({ activeTab, setTab, tabs }: TabBarProps) {
  return (
    <>
      <div class="tabs-container">
        {tabs.map((tab) => (
          <span
            class={tab === activeTab() ? "active" : ""}
            onClick={() => setTab(tab)}
          >
            {tab.label}
          </span>
        ))}
      </div>
      {activeTab().view()}
    </>
  );
}
