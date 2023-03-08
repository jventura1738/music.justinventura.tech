import ReleaseCard from "./ReleaseCard";
import { ReleaseCardProps } from "./interfaces";

import TheFinerThingsImg from "../../images/TheFinerThings.png";
import SearchingImg from "../../images/Searching.png";

const dummy_data: ReleaseCardProps[] = [
  {
    id: 1,
    title: "Burnin Rubber",
    artists: ["Zoom", "Swipe"],
    cover_art: TheFinerThingsImg,
    spotify_link:
      "https://open.spotify.com/album/3n3Ppam7vgaVa1iaRUc9Lp?si=QZQZQZQZQZQZQZQZQZQZQZQ",
    apple_music_link:
      "https://music.apple.com/us/album/dark-side-of-the-moon/1447250721",
  },
  {
    id: 2,
    title: "Champagne N Tears",
    artists: ["Zoom", "Swipe"],
    cover_art: TheFinerThingsImg,
    spotify_link:
      "https://open.spotify.com/album/3n3Ppam7vgaVa1iaRUc9Lp?si=QZQZQZQZQZQZQZQZQZQZQZ",
    apple_music_link:
      "https://music.apple.com/us/album/dark-side-of-the-moon/1447250721",
  },
  {
    id: 3,
    title: "Nothings Real",
    artists: ["Zoom", "Swipe"],
    cover_art: SearchingImg,
    spotify_link:
      "https://open.spotify.com/album/3n3Ppam7vgaVa1iaRUc9Lp?si=QZQZQZQZQZQZQZQZQZQZQZ",
    apple_music_link:
      "https://music.apple.com/us/album/dark-side-of-the-moon/1447250721",
  },
];

function TopReleases() {
  return (
    <div className="top-releases">
      <h2>Top Releases</h2>
      <div className="top-releases-container grid grid-rows-3 tablet:grid-cols-3">
        {dummy_data.map((release) => (
          <ReleaseCard {...release} />
        ))}
      </div>
    </div>
  );
}

export default TopReleases;
