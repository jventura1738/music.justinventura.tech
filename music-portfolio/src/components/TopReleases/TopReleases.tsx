import ReleaseCard from "./ReleaseCard";
import { ReleaseCardProps } from "./interfaces";

import TheFinerThingsImg from "../../images/TheFinerThings.png";
import SearchingImg from "../../images/Searching.png";

// TODO: Replace this with a call to the backend
const dummy_data: ReleaseCardProps[] = [
  {
    id: 1,
    title: "Burnin Rubber",
    artists: ["Zoom", "Swipe"],
    cover_art: TheFinerThingsImg,
    spotify_link:
      "https://open.spotify.com/track/4vRvdnj0NDN4Q7Dr3gkeHI?si=8954cf4a66974d2e",
    apple_music_link:
      "https://music.apple.com/us/album/dark-side-of-the-moon/1447250721",
  },
  {
    id: 2,
    title: "Champagne N Tears",
    artists: ["Zoom", "Swipe"],
    cover_art: TheFinerThingsImg,
    spotify_link:
      "https://open.spotify.com/track/6nNJHC3OClXsVfuDbxjxYi?si=780d398527b3464d",
    apple_music_link: "",
  },
  {
    id: 3,
    title: "Nothings Real",
    artists: ["Zoom", "Swipe"],
    cover_art: SearchingImg,
    spotify_link:
      "https://open.spotify.com/track/2itjQGKKjNuO9w7WKlel2Q?si=39cf874e0ae5494b",
    apple_music_link: "",
  },
  {
    id: 4,
    title: "Demons Are Winning",
    artists: ["Zoom", "Swipe"],
    cover_art: SearchingImg,
    spotify_link:
      "https://open.spotify.com/track/2ti6MoMMDR0BldHkZHOvxx?si=4734d6fecca547e7",
    apple_music_link: "",
  },
  {
    id: 5,
    title: "Cold Sweat",
    artists: ["Zoom", "Swipe"],
    cover_art: SearchingImg,
    spotify_link:
      "https://open.spotify.com/track/6LTgae7TKeXJqMAcYgEJVv?si=7c320dc9ed334940",
    apple_music_link: "",
  },
];

function TopReleases() {
  return (
    <div className="top-releases">
      <h2 className="mb-4 text-2xl font-bold">Top Releases</h2>
      <div className="carousel flex gap-4 overflow-x-auto">
        {dummy_data.map((release) => (
          <div className="carousel-item flex-shrink-0">
            <ReleaseCard key={release.id} {...release} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopReleases;
