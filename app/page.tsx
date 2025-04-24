import About2 from "@/components/About2";
import CardsList from "@/components/CardsList";
import HeroOneImg from "@/components/HeroOneImg";
import NasTim from "@/components/NasTim";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import Statistika from "@/components/Statistika";
import Usluge from "@/components/Usluge";
import VideoCard from "@/components/VideoCard";
export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <About2 />
      <CardsList />
      <PozoviteNasOdmah />
      <Usluge />
      <Statistika />
      <NasTim />
      <VideoCard />
      {/* <About /> */}
      {/* <Namera /> */}
      {/* <Cilj /> */}
      {/* <Delovanje /> */}
    </div>
  );
}
