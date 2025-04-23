"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className=" md:w-2/3 space-y-3 md:space-y-8">
          <h2 className="">Dobrodošli u Centar za drugo obrazovanje</h2>
          <p className=" first-letter:pl-6">
            Naš centar je bezbedno i podsticajno mesto gde svako dete dobija
            priliku da razvije svoj puni potencijal.
          </p>
          <p className=" first-letter:pl-6">
            Pružamo stručnu podršku deci sa razvojnim poteškoćama i njihovim
            porodicama, sa ciljem ranog prepoznavanja, pravilnog usmeravanja i
            efikasne podrške kroz individualni i grupni rad.
          </p>
        </div>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }} // Naizmenično levo/desno
          whileInView={{ scale: 1, opacity: 1 }} // Animira se ka centru
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden  md:w-1/3"
        >
          <Image
            src={"/hero.jpg"}
            width={500}
            height={500}
            alt="pedagog"
            className="object-covermd:h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About2;
