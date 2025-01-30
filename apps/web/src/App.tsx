import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { SiteSidebar } from "./components/site-sidebar/SiteSidebar";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <SiteSidebar />
    </div>
  );
};

export default App;
