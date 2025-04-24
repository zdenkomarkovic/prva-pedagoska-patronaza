"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto  space-y-7">
        <h2 className="">
          Prva pedagoška patronaža je centar koji je u službi roditelja, dece i
          porodice i jedina je i prva kod nas i u regionu ovog tipa.
        </h2>
        <p className=" first-letter:pl-6">
          Naše polje delovanja je -{" "}
          <span className="font-bold text-primary">
            {" "}
            Preventivna pedagogija i preventiva pre korektive.
          </span>
        </p>
        <p className=" first-letter:pl-6">
          Naš centar je bezbedno i podsticajno mesto gde svako dete dobija
          priliku da razvije svoj puni potencijal.
        </p>
        <p className=" first-letter:pl-6">
          Pružamo stručnu podršku deci sa razvojnim poteškoćama i njihovim
          porodicama, sa ciljem ranog prepoznavanja, pravilnog usmeravanja i
          efikasne podrške kroz individualni i grupni rad.
        </p>
        <p className=" first-letter:pl-6">
          Usluge našeg Centra su sa ciljem rešavanja problema nedostatka vremena
          roditelja, komfor za dete koju nudi ova vrsta usluge, uvid roditelja u
          proces napretka, kontinuitet, diskrecija svakog klijenta, mogućnost
          dogovora paketa za dvoje ili više dece iz iste porodice, sistemski
          pristup celoj porodici, jasno podržani targetirani problemi i povoljne
          mere podrške za jake strane školarca, podsticaj roditeljima da imaju
          više slobodnog vremena za druženje sa svojom decom bez konflikata oko
          školskih obaveza. Sve što može da doprinese kvalitetnom obrazovanju,
          boljem vaspitanju, socijalnoj prihvaćenosti i na bilo koji način
          donese dobrobit vašem detetu (tipičnog i netipičnog razvoja) naša
          stručna pedagoška patronaža će biti tu za vas. Pomozite nam da vam
          budemo što bolji i slavićemo napredak vašeg deteta zajedno. Osnovan je
          sa ciljem da olakša roditeljima i deci školske obaveze na kućnoj
          adresi:
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
            className="rounded-lg overflow-hidden  md:w-1/3"
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
        <p className=" first-letter:pl-6 font-bold text-center">
          Svako dete je jedinstveno, i svako dete zaslužuje šansu.
        </p>
        <h3 className=" first-letter:pl-6 font-bold text-primary">
          Skrećemo pažnju da mesto obavljanja delatnosti i pružanja usluga
          prilagođavamo želji korisnika.{" "}
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <Image
            src={"/mapa.png"}
            width={350}
            height={350}
            alt="pedagog"
            className="w-[170px] md:w-[300px]"
          />
          <div className="flex flex-col gap-3 text-center  text-primary">
            <div className="mx-auto border bg-white border-primary shadow-lg py-5 px-5 md:px-20 w-full rounded-lg">
              <p>Program i edukacija u samom centru</p>
            </div>
            <div className="mx-auto border bg-white border-primary shadow-lg p-5 w-full rounded-lg">
              {" "}
              <p>Onlajn program i edukacija</p>
            </div>
            <div className="mx-auto border bg-white border-primary shadow-lg p-5 w-full rounded-lg">
              {" "}
              <p>Dolazak naših stručnjaka na adresu</p>
            </div>
          </div>
        </div>
        <p className=" first-letter:pl-6 font-bold">
          Pedagoška patronaža šalje svoja stručna lica na kućnu adresu roditelja
          zauzetih poslom, jer je benefit dvojak – dete sa samopouzdanjem i
          roditelj sa mirom i odmorom za dalje posvećivanje porodici bez
          rasipanja vremena po gradskim gužvama.
        </p>
      </div>
    </div>
  );
};

export default About2;
