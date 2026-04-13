import Storefront from "../assets/svg/Storefront.svg?react";
import BurgerMenu from "../assets/svg/Burger-Menu.svg?react";

export const Header = () => {
  return (
    <header className="flex">
      <Storefront className="w-6 h-6 fill-[#A259FF]" />
      <a href="/" >NFT Marketplace</a>
      <BurgerMenu className="w-6 h-6 fill-[white]" />
    </header>
  );
};
