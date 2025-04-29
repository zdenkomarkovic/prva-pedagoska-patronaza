"use client";

import Hero3 from "../public/heroo3.jpg";
import Image from "next/image";
import { ArrowRightIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" h-[100dvh]">
      <div className="relative flex h-[77dvh]">
        <div className="absolute top-0 left-0 w-full h-full bg-white/20 z-[1]" />
        <Image
          src={Hero3}
          alt="pedagog"
          fill
          className="w-full h-[77dvh] md:h-[100dvh] object-cover"
        />

        <div className="relative container px-2 md:px-4 mx-auto  flex flex-col gap-6 items-center pt-20 md:pt-10 justify-center z-[1] ">
          <h1 className="text-primary text-3xl md:text-7xl text-center font-bold px-4">
            Prva pedagoška patronaža
          </h1>
          <h2 className="text-white font-medium">
            centar u službi roditelja, dece i porodice
          </h2>
          <div className="flex flex-col gap-4 md:flex-row text-center items-center">
            <Link href="/#usluge">
              <motion.button
                whileHover={{ translateY: "-5px" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-primary text-muted px-4 py-2 md:px-8 md:py-3 rounded-lg font-medium"
              >
                Istražite naše usluge
                <ArrowRightIcon className="w-[18px]" />
              </motion.button>
            </Link>
            <a href="tel:+3816000000">
              <motion.button
                whileHover={{ translateY: "-5px" }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent flex gap-3 text-primary font-bold border-primary border-[2px] rounded-lg px-4 md:px-8 md:py-3 py-2"
              >
                <PhoneIcon />
                POZOVITE ODMAH
              </motion.button>
            </a>
          </div>
        </div>
      </div>
      <div className="h-[23dvh] flex items-center">
        <h2 className="container px-2 md:px-4 mx-auto">
          Prva pedagoška patronaža je centar koji je u službi roditelja, dece i
          porodice i jedina je i prva kod nas i u regionu ovog tipa.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
