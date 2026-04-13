import { Storefront, DiscordLogo, YoutubeLogo, TwitterLogo, InstagramLogo } from "@/assets";

export const Footer = () => {
  return (
    <footer className="bg-[var(--background---secondary)]">
      <ul>
        <li>
          <Storefront />
          <h2>NFT Marketplace</h2>
          <p>NFT marketplace UI created with Anima for Figma.</p>
          <p>Join our community</p>
          <DiscordLogo />
          <YoutubeLogo />
          <TwitterLogo />
          <InstagramLogo />
        </li>
        <li>
          <h2>Explore</h2>
          <p>Marketplace</p>
          <p>Rankings</p>
          <p>Connect a wallet</p>
        </li>

        <li>
          <h2>Join our weekly digest</h2>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <input type="email" placeholder="Enter your email here" />
          <button>Subscribe</button>
        </li>
      </ul>
      <hr />
      <p>Ⓒ NFT Market. Use this template freely.</p>
    </footer>
  );
};
