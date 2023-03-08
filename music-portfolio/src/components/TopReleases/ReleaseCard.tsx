import { ReleaseCardProps } from "./interfaces";

function ReleaseCard({
  id,
  title,
  artists,
  cover_art,
  spotify_link,
  apple_music_link,
}: ReleaseCardProps) {
  return (
    <div key={id} className="release-card grid grid-cols-3">
      <div className="left-section col-span-2 text-red-400">
        <h1 className="truncate text-2xl">{title}</h1>
        <p>by: {artists.join(", ")}</p>
      </div>
      <div className="right-section col-span-1 h-auto w-full max-w-sm">
        <img alt={title + " by " + artists} src={cover_art} className=""></img>
      </div>
    </div>
  );
}

export default ReleaseCard;
