import { Storefront, BurgerMenu, NFTMarketplace } from "@/assets";
import { Container } from "./Container";

export const Header = () => {
  return (
    <header>
      <Container>
        <nav className="pt-3">
          <ul className="flex">
            <li>
              <Storefront className="w-6 h-6 fill-[#A259FF]" />
            </li>
            <li>
              <NFTMarketplace className="w-37 fill-white ml-2 mr-27" />
            </li>
            <li>
              <BurgerMenu className="w-6 h-6 fill-[white]" />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
