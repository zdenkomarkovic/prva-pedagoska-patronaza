"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";

const PozoviteNasOdmah = () => {
  return (
    <div className="bg-primary  py-10 md:py-20">
      <div className="container px-2 md:px-4 mx-auto font-bold flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div>
          <h2 className=" text-muted">
            Kontaktirajte nas za prvi razgovor – tu smo za vas.
          </h2>
          <h3 className=" text-muted">
            Pridružite nam se na ovom putu rasta i razvoja.
          </h3>
        </div>
        <a href="tel:+381659480700">
          <motion.button
            whileHover={{ translateY: "-5px" }}
            whileTap={{ scale: 0.95 }}
            className=" text-nowrap flex gap-3 text-3xl items-center text-primary bg-muted rounded-lg px-4 md:px-8 md:py-3 py-2"
          >
            <PhoneIcon /> Pozovite odmah
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default PozoviteNasOdmah;
