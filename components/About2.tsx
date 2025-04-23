"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto  space-y-7">
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
        <div className="flex flex-col gap-5 md:flex-row items-center justify-around border border-primary bg-white p-4 md:p-10 rounded-lg">
          <ul className="text-primary">
            <li className=" first-letter:pl-6">
              - Kašnjenje u razvoju govora i jezika
            </li>
            <li className=" first-letter:pl-6">
              - Kašnjenje u razvoju motorike (krupne i fine)
            </li>
            <li className=" first-letter:pl-6">
              {" "}
              - Poteškoće u ponašanju i pažnji
            </li>
            <li className=" first-letter:pl-6">
              {" "}
              - Autizam, ADHD, dispraksija
            </li>
            <li className=" first-letter:pl-6">
              - Emocionalna nestabilnost, nesigurnost, socijalna povučenost
            </li>
            <li className=" first-letter:pl-6">
              {" "}
              - Priprema za školu / adaptacija na školu
            </li>
          </ul>
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
              className=""
            />
          </motion.div>
        </div>
        <p className=" first-letter:pl-6 text-center">
          Naša filozofija:{" "}
          <span className="font-bold text-primary">
            {" "}
            Ljubav, razumevanje i stručnost u svakom koraku
          </span>
          .
        </p>{" "}
        <p className=" first-letter:pl-6 font-bold text-primary text-center">
          Svako dete je jedinstveno, i svako dete zaslužuje šansu.
        </p>
      </div>
    </div>
  );
};

export default About2;
