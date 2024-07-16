import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";

export const inject = (parentElementId) => {
  const container = document.getElementById(parentElementId);
  const root = createRoot(container); // Create a root.
  root.render(<App />); // Initial render
};

export const unmount = (parentElementId) => {
  const container = document.getElementById(parentElementId);
  const root = createRoot(container); // Re-create the root.
  root.unmount(); // Unmount the component.
};
