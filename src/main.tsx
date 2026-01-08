import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import SpiderFavicon from "./data/assets/letter-a.png";
import { Analytics } from "@vercel/analytics/react";

// Ensure favicon uses the added asset
const ensureFavicon = () => {
  const head = document.head;
  let link: HTMLLinkElement | null = head.querySelector("link[rel='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    head.appendChild(link);
  }
  link.type = "image/png";
  link.href = SpiderFavicon;
};

ensureFavicon();

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics />
  </>
);
