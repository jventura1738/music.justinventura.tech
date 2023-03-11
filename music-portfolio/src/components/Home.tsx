import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";
import TopReleases from "./TopReleases/TopReleases";
import HighlightedPreviews from "./HighlightedPreviews/HighlightedPreviews";

function Home() {
  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col">
      <Nav />
      <div id="top-songs" className="flex-1 tablet:max-h-40">
        <TopReleases />
      </div>
      <div className="flex-1">
        {/* <HighlightedPreviews /> */}
        <h2>Highlighted Previews Coming Soon...</h2>
      </div>
      <div className="flex-1">
        <h2>Featured Albums Coming Soon...</h2>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
