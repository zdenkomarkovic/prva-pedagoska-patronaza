import About from "@/components/About";
import HeroOneImg from "@/components/HeroOneImg";
import NasTim from "@/components/NasTim";
import Prednosti from "@/components/Prednosti";
import Statistika from "@/components/Statistika";
import Usluge from "@/components/Usluge";
import VideoCard from "@/components/VideoCard";
export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <About />
      <Usluge />
      <Prednosti />
      <Statistika />
      <NasTim />
      {/* <Namera /> */}
      {/* <Cilj /> */}
      <VideoCard />
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
