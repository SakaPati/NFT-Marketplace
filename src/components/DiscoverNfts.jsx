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
      <h2 className="font-work font-semibold text-[28px]/[1.4] capitalize">Discover More NFTs</h2>
      <p className="font-work font-normal text-[16px]/[1.4]">Explore new trending NFTs</p>

      <ul className="flex flex-col my-10 gap-y-5">
        {discover.map(({ bgImage, desc, author: { img, name }, price, bid }) => (
          <li key={nanoid()} className="bg-(--background---secondary) rounded-[20px]">
            <ul>
              <li>
                <img src={bgImage} alt={desc} />
              </li>
              <li className="pt-5 px-5 pb-6.25">
                <p className="font-work font-semibold text-[22px]/[1.4] capitalize">{desc}</p>
                <div className="flex gap-x-3 mt-1.25 mb-6.25">
                  <img src={img} alt={name} />
                  <p className="font-space font-normal text-[16px]/[1.4]">{name}</p>
                </div>

                <div className="flex font-space font-normal text-[12px]/[1.1]">
                  <p className="flex flex-col pr-5.25 w-34.25 ">
                    <span className="font-space font-normal text-(--caption-label-text) pb-2">Price</span>
                    {price} ETH
                  </p>
                  <p className="flex flex-col w-34.25 text-right">
                    <span className="font-space font-normal text-(--caption-label-text) pb-2">Highest Bid</span>
                    {bid} wETH
                  </p>
                </div>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <button className="flex justify-center items-center rounded-[20px] w-78.75 h-15 font-work font-semibold text-[16px]/[1.4] border-2 border-solid border-(--call-to-action)">
        <Eye className="fill-(--call-to-action) mr-3" />
        See All
      </button>
    </section>
  );
};
