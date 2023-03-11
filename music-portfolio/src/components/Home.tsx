import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";
import TopReleases from "./TopReleases/TopReleases";

function Home() {
  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col">
      <Nav />
      <div id="top-songs" className="tablet:max-h-50 flex-1">
        <TopReleases />
      </div>
      {/* <div className="flex-1 outline">
        <h2>Highlighted Previews</h2>
      </div>
      <div className="flex-1 outline">
        <h2>Featured Albums</h2>
      </div> */}
      <Footer />
    </div>
  );
}

export default Home;
