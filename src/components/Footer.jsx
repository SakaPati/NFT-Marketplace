import { Storefront, DiscordLogo, YoutubeLogo, TwitterLogo, InstagramLogo, NFTMarketplace, Email } from "@/assets";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="bg-(--background---secondary) py-10">
      <Container>
        <ul className="flex flex-col gap-y-7.5">
          <li>
            <a href="/" className="flex gap-x-3">
              <Storefront className="fill-[#A259FF]" />
              <NFTMarketplace className="w-50 fill-white" />
            </a>

            <p className="font-work font-normal text-sm text-[#ccc] py-4">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p className="font-work font-normal text-sm text-[#ccc] pb-3.75">Join our community</p>

            <div className="flex gap-x-2.5">
              <DiscordLogo className="fill-[#858584]" />
              <YoutubeLogo className="fill-[#858584]" />
              <TwitterLogo />
              <InstagramLogo className="fill-[#858584]" />
            </div>
          </li>

          <li className="flex flex-col gap-y-5">
            <h2 className="font-space font-bold text-[22px]/[1.6] capitalize">Explore</h2>
            <p className="font-work font-normal text-sm text-[#ccc]">Marketplace</p>
            <p className="font-work font-normal text-sm text-[#ccc]">Rankings</p>
            <p className="font-work font-normal text-sm text-[#ccc]">Connect a wallet</p>
          </li>

          <li>
            <h2 className="font-space font-bold text-[22px]/[1.6] capitalize">Join our weekly digest</h2>
            <p className="font-work font-normal text-sm text-[#ccc]">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <input
              type="email"
              placeholder="Enter your email here"
              className="border border-solid border-(--caption-label-text) rounded-[20px] mt-5 px-5 py-4 w-78.75 h-11.5 bg-white placeholder:font-work placeholder:font-normal placeholder:text-sm placeholder:text-(--background)"
            />
            <button className="center rounded-[20px] px-12.5 w-78.75 h-11.5 bg-(--call-to-action) gap-x-3 title text-sm mt-4">
              <Email className="fill-white" />
              Subscribe
            </button>
          </li>
        </ul>
        <hr className="mt-7.5 mb-5 text-(--caption-label-text)" />
        <p className="font-work font-normal text-xs text-[#ccc]">Ⓒ NFT Market. Use this template freely.</p>
      </Container>
    </footer>
  );
};
