// Navbar file:
import { SiApplemusic, SiSpotify } from "react-icons/si";

function Nav() {
  return (
    <nav className="flex justify-between items-center py-4">
      <p className="pl-8 text-2xl">Justin aka "Zoom"</p>
      <div className="flex gap-6 px-4 cursor-pointer">
        <a
          href="https://open.spotify.com/artist/4XTpWQDabUAQbo1A6Lm1k0"
          target="_blank"
          rel="noreferrer"
        >
          <SiSpotify className="h-10 w-10 text-green-500" />
        </a>
        <a
          href="https://music.apple.com/us/artist/prodzoom/1582493088"
          target="_blank"
          rel="noreferrer"
        >
          <SiApplemusic className="h-10 w-10 text-red-500" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
