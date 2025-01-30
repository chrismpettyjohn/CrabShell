import type { Component } from "solid-js";

import styles from "./App.module.css";
import { SiteSidebar } from "./components/site-sidebar/SiteSidebar";
import { AuthProvider } from "./context/AuthContext";

const App: Component = () => {
  return (
    <AuthProvider>
      <div class={styles.App}>
        <SiteSidebar />
      </div>
    </AuthProvider>
  );
};

export default App;
