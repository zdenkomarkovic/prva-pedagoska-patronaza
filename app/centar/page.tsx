import About2 from "@/components/About2";
import CardsList from "@/components/CardsList";
import HeroOneImg from "@/components/HeroOneImg";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroOneImg />
      <About2 />
      <CardsList />
      <PozoviteNasOdmah />
    </div>
  );
};

export default page;
