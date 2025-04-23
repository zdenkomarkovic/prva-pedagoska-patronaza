"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistika = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className=" py-7 text-center">
      <div className="container px-2 md:px-4 mx-auto ">
        <h2 className=" mb-16">Naši rezultati govore...</h2>
        <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-2 md:p-5 rounded-lg">
            <p className="text-4xl md:text-5xl font-bold text-primary">
              {inView && <CountUp end={15} duration={2} suffix="+" />}
            </p>
            <p className="mt-2">Godina iskustva</p>
          </div>
          <div className="bg-white p-2 md:p-5 rounded-lg">
            <p className="text-4xl md:text-5xl font-bold text-primary">
              {inView && <CountUp end={200} duration={2} suffix="+" />}
            </p>
            <p className="mt-2">Zadovoljnih klijenata</p>
          </div>
          <div className="bg-white p-2 md:p-5 rounded-lg">
            <p className="text-4xl md:text-5xl font-bold text-primary">
              {inView && <CountUp end={10} duration={2} suffix="+" />}
            </p>
            <p className="mt-2">Stručnih ljudi u timu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistika;
