import { galaxy, moondancer, edena, nebulakid, astrofiction, spaceone, Eye } from "@/assets";
import { nanoid } from "nanoid";

const discover = [
  { bgImage: galaxy, desc: "Distant Galaxy", author: { img: moondancer, name: "MoonDancer" }, price: 1.63, bid: 0.33 },
  { bgImage: edena, desc: "Life on Edena", author: { img: nebulakid, name: "NebulaKid" }, price: 1.63, bid: 0.33 },
  { bgImage: astrofiction, desc: "AstroFiction", author: { img: spaceone, name: "Spaceone" }, price: 1.63, bid: 0.33 },
];

export const DiscoverNfts = () => {
  return (
    <section>
      <h2>DiscoverNfts</h2>
      <p>Explore new trending NFTs</p>

      <ul>
        {discover.map(({ bgImage, desc, author: { img, name }, price, bid }) => (
          <li key={nanoid()} className="bg-[var(--background---secondary)]">
            <img src={bgImage} alt={desc} />
            <p>{desc}</p>
            <div>
              <img src={img} alt={name} />
              <p>{name}</p>
            </div>
            <p>
              <span>Price</span>
              {price} ETH
            </p>
            <p>
              <span>Highest Bid</span>
              {bid} wETH
            </p>
          </li>
        ))}
      </ul>

      <button>
        <Eye />
        See All
      </button>
    </section>
  );
};
