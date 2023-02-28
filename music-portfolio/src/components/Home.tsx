import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";

function Home() {
  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto">
      <Nav />
      <div id="top-songs" className="flex-1 outline">
        <h2>Top Songs</h2>
      </div>
      <div className="flex-1 outline">
        <h2>Highlighted Previews</h2>
      </div>
      <div className="flex-1 outline">
        <h2>Featured Albums</h2>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
