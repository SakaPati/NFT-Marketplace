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
      <h2 className="font-work font-semibold text-[28px]/[1.4] capitalize">Browse Categories</h2>
      <ul className="flex flex-wrap gap-5">
        {categories.map(({ img, icon, text }) => {
          const Icon = icon;

          return (
            <li key={nanoid()} className="bg-(--background---secondary) rounded-[20px] w-36.75 relative">
              <div className="overflow-hidden rounded-t-[20px]">
                <img src={img} alt={text} className="blur-[15px]" />
              </div>
              <Icon className="absolute top-8 left-8" />
              <p className="font-work font-semibold text-[16px]/[1.4] pt-5 px-5 pb-6.25">{text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
