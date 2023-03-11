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
    <a
      href={spotify_link}
      className="release-card grid w-64 grid-cols-3 rounded-xl bg-gradient-to-t from-gray-700 via-black to-black bg-size-200 bg-pos-0 transition-all duration-500 hover:bg-pos-100 tablet:w-72 desktop:w-80"
    >
      <div className="left-section col-span-1">
        <img
          alt={title + " by " + artists}
          src={cover_art}
          className="h-24 w-24 rounded-xl"
        ></img>
      </div>
      <div className="right-section col-span-2 py-4 text-white">
        <h1 className="truncate font-bold">{title}</h1>
        <p className="truncate text-sm text-gray-500">{artists.join(", ")}</p>
      </div>
    </a>
  );
}

export default ReleaseCard;
