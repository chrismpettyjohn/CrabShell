import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { SiteSidebar } from "./components/site-sidebar/SiteSidebar";
import { SessionProvider } from "./context/SessionProvider";

const App: Component = () => {
  return (
    <SessionProvider>
      <div class={styles.App}>
        <SiteSidebar />
      </div>
    </SessionProvider>
  );
};

export default App;
