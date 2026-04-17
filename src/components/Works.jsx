import { wallet, collection, earning } from "@/assets";
import { nanoid } from "nanoid";
import { Container } from "./Container";

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
      <Container>
        <h2 className="title text-lg">How it works</h2>
        <p className="font-work font-normal text-sm">Find out how to get started</p>

        <ul className="flex flex-col gap-y-5 mt-10">
          {works.map(({ img, text, desc }) => (
            <li key={nanoid()} className="flex rounded-[20px] bg-(--background---secondary) p-5 w-78.75 h-39.25">
              <img src={img} alt={text} className="w-full h-full object-cover scale-[1.5]" />
              <div>
                <h3 className="title text-sm mb-2.5">{text}</h3>
                <p className="font-work font-normal text-[12px]/[1.4]">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
