import About from "@/components/About";
import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cardlist from "@/components/Cardlist";
import Cards1 from "@/components/Cards1";
import Cards2 from "@/components/Cards2";
import Cards2Kosina from "@/components/Cards2Kosina";
import CardWithImage from "@/components/CardWithImage";
import Cilj from "@/components/Cilj";
import Delovanje from "@/components/Delovanje";
import HeroOneImg from "@/components/HeroOneImg";
import Namera from "@/components/Namera";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import Prednosti from "@/components/Prednosti";
import Testemonials from "@/components/Testimonials";
import Usluge from "@/components/Usluge";
import VideoCard from "@/components/VideoCard";
import { cards1Data, cards2Data, cards2DataText } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <About />
      <Usluge />
      <Prednosti />
      {/* <Namera /> */}
      {/* <Cilj /> */}
      {/* <VideoCard /> */}
      {/* <Delovanje /> */}
      {/* <About2 />
      <PozoviteNasOdmah />
      <CardWithImage />
      <PozoviteNasOdmahImage />
      <Cards1 title={"dodaj naslov"} data={cards1Data} />
      <Cards2
        title={"Elektroinstalacije i elektro ormani"}
        data={cards2Data}
        text={cards2DataText}
      />
      <Cards2Kosina
        title={"Elektroinstalacije i elektro ormani"}
        data={cards2Data}
        text={cards2DataText}
      />
      <Cardlist />
      <BackgroundImage />
      <Testemonials /> */}
    </div>
  );
}
