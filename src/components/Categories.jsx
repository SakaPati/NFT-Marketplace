import {
  art,
  collectibles,
  music,
  photography,
  video,
  utility,
  sport,
  virtual,
  PaintBrush,
  Swatches,
  MusicNotes,
  Camera,
  VideoCamera,
  MagicWand,
  Basketball,
  Planet,
} from "@/assets";
import { nanoid } from "nanoid";

const categories = [
  { img: art, icon: PaintBrush, text: "Art" },
  { img: collectibles, icon: Swatches, text: "Collectibles" },
  { img: music, icon: MusicNotes, text: "Music" },
  { img: photography, icon: Camera, text: "Photography" },
  { img: video, icon: VideoCamera, text: "Video" },
  { img: utility, icon: MagicWand, text: "Utility" },
  { img: sport, icon: Basketball, text: "Sport" },
  { img: virtual, icon: Planet, text: "Virtual Worlds" },
];

export const Categories = () => {
  return (
    <section>
      <h2>Browse Categories</h2>
      <ul>
        {categories.map(({ img, icon, text }) => {
          const Icon = icon;

          return (
            <li key={nanoid()} className="bg-(--background---secondary)">
              <img src={img} alt={text} className="blur-[15px]" />
              <Icon />
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
