import { wallet, collection, earning } from "@/assets";
import { nanoid } from "nanoid";

const works = [
  {
    img: wallet,
    text: "Setup Your wallet",
    desc: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
  },
  {
    img: collection,
    text: "Create Collection",
    desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    img: earning,
    text: "Start Earning",
    desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];

export const Works = () => {
  return (
    <section>
      <h2>How it works</h2>
      <p>Find out how to get started</p>

      <ul>
        {works.map(({ img, text, desc }) => (
          <li key={nanoid()} className="bg-[var(--background---secondary)]">
            <img src={img} alt={text} />
            <h3>{text}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
