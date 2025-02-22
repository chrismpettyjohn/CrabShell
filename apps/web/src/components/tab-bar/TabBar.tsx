import { JSX, createSignal, Show } from "solid-js";

export interface Tab {
  label: string;
  view: () => JSX.Element;
}

export interface TabBarProps {
  activeTab: () => number;
  setTab: (newTabIndex: number) => void;
  tabs: Tab[];
}

export function TabBar({ activeTab, setTab, tabs }: TabBarProps) {
  const [currentKey, setCurrentKey] = createSignal(0);

  return (
    <>
      <div class="tabs-container">
        {tabs.map((tab, index) => (
          <span
            class={index === activeTab() ? "active" : ""}
            onClick={() => {
              setTab(index);
              setCurrentKey((prev) => prev + 1); // Change key to force remount
            }}
          >
            {tab.label}
          </span>
        ))}
      </div>

      {/* Show component ensures unmounting and remounting */}
      <Show when={true} keyed>
        <div key={currentKey()} class="tab-content fade-in">
          {tabs[activeTab()].view()}
        </div>
      </Show>
    </>
  );
}
