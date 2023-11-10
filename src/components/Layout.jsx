import React from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <main className="font-roboto">
      <TopBar />
      {children}
      <Footer />
    </main>
  );
}
