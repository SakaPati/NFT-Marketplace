import { Categories } from "./components/Categories";
import { Creators } from "./components/Creators";
import { DiscoverNfts } from "./components/DiscoverNfts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Main } from "./components/Main";
import { Mashrooms } from "./components/Mashrooms";
import { Treding } from "./components/Trending";
import { WeeklyDigest } from "./components/WeeklyDigest";
import { Works } from "./components/Works";
import { Container } from "./components/Container";

function App() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <Treding />
        <Creators />
        <Categories />
        <DiscoverNfts />
        <Mashrooms />
        <Works />
        <WeeklyDigest />
      </Main>
      <Footer />
    </>
  );
}

export default App;
