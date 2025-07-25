import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router";
// import { HomeScreen } from "@/pages/home-screen";
// import { NotFound } from "@/pages/not-found";
// import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import App from "./App";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>,
);
