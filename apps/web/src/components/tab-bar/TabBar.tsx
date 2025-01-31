import { JSX } from "solid-js";

export interface Tab {
  label: string;
  view: () => JSX.Element;
}

export interface TabBarProps {
  activeTab: () => number; // Getter function for current tab index
  setTab: (newTabIndex: number) => void; // Setter function to change tab index
  tabs: Tab[];
}

export function TabBar({ activeTab, setTab, tabs }: TabBarProps) {
  return (
    <div class="tabs-container">
      {tabs.map((tab, index) => (
        <span
          class={index === activeTab() ? "active" : ""}
          onClick={() => setTab(index)}
        >
          {tab.label}
        </span>
      ))}
    </div>
  );
}
