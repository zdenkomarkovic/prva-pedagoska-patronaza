"use client";

import React from "react";

const About = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto py-7 md:py-12 space-y-5">
      {" "}
      <h2 className=" text-6xl text-primary text-center py-10 font-gagalin">
        Prva pedagoška patronaža je centar koji je u službi roditelja, dece i
        porodice i jedina je i prva kod nas i u regionu ovog tipa.
      </h2>
      <ul>
        <li>Zaštićen je u Zavodu za patente.</li>
        <li>Mi smo sinonim za kvalitet na vašoj adresi.</li>
        <li>
          Naše polje delovanja je -{" "}
          <span className="font-bold">
            {" "}
            Preventivna pedagogija i preventiva pre korektive.
          </span>
        </li>
      </ul>
      <p className=" first-letter:pl-6">
        Usluge našeg Centra su sa ciljem rešavanja problema nedostatka vremena
        roditelja, komfor za dete koju nudi ova vrsta usluge, uvid roditelja u
        proces napretka, kontinuitet, diskrecija svakog klijenta, mogućnost
        dogovora paketa za dvoje ili više dece iz iste porodice, sistemski
        pristup celoj porodici, jasno podržani targetirani problemi i povoljne
        mere podrške za jake strane školarca, podsticaj roditeljima da imaju
        više slobodnog vremena za druženje sa svojom decom bez konflikata oko
        školskih obaveza. Sve što može da doprinese kvalitetnom obrazovanju,
        boljem vaspitanju, socijalnoj prihvaćenosti i na bilo koji način donese
        dobrobit vašem detetu (tipičnog i netipičnog razvoja) naša stručna
        pedagoška patronaža će biti tu za vas. Pomozite nam da vam budemo što
        bolji i slavićemo napredak vašeg deteta zajedno. Osnovan je sa ciljem da
        olakša roditeljima i deci školske obaveze na kućnoj adresi:
      </p>{" "}
      <ul>
        <li className=" first-letter:pl-6"> - predčitalački momenti</li>
        <li className=" first-letter:pl-6"> - geogebra</li>
        <li className=" first-letter:pl-6">
          {" "}
          - rad sa potencijalno darovitima
        </li>
        <li className=" first-letter:pl-6">
          {" "}
          - poboljšanje veštine i komunikacije
        </li>
        <li className=" first-letter:pl-6"> - motoričke smetnje</li>
        <li className=" first-letter:pl-6">
          {" "}
          - regulacija nepoželjnih oblika ponašanja
        </li>
        <li className=" first-letter:pl-6"> - kognitivne veštine i sl.</li>
      </ul>
      <ul className="font-bold">
        <li className=" first-letter:pl-6 ">
          Da pomognemo deci sa smetnjama u razvoju i njihovim roditeljima, da
          znaju da nisu sami u toj borbi.
        </li>
        <li className=" first-letter:pl-6">
          Da pokušamo da osvestimo i adekvatnim tretmanima stručnih lica
          pokažemo da nije svaka razvojna smetnja dijagnoza.
        </li>
        <li className=" first-letter:pl-6">
          Da zajedno nosimo teret i pronađemo najbolje rešenje uz pomoć stručnog
          tima za vas i vaše potomstvo.
        </li>
        <li className=" first-letter:pl-6">
          Namera je da se uštedi vreme i da se radi sa decom u prostoru u kome
          je detetu udobno i u kom se oseća slobodno.
        </li>
        <li className=" first-letter:pl-6">
          Rad i podrška su programirani prema individualnim potrebama vašeg
          deteta.
        </li>
        <li className=" first-letter:pl-6">
          Dogovaramo se i radimo zajedno u najboljem interesu.
        </li>
        <li className=" first-letter:pl-6">
          Sa nama možete biti ono što jeste, naš rad prilagođavamo vašim
          potrebama i evaluaciju radimo u vašem domu.
        </li>
      </ul>
      <p className=" first-letter:pl-6">
        Pedagoška patronaža šalje svoja stručna lica na kućnu adresu roditelja
        zauzetih poslom, jer je benefit dvojak – dete sa samopouzdanjem i
        roditelj sa mirom i odmorom za dalje posvećivanje porodici bez rasipanja
        vremena po gradskim gužvama.
      </p>
      <p className=" first-letter:pl-6">
        Poverite nam poverenje i uživajte u rezultatima.
      </p>
      <p className=" first-letter:pl-6">
        Kada su u pitanju deca iz inkluzije, tu imamo pristup prvog viđenja u
        centru:
      </p>
      <li className=" first-letter:pl-6">
        gde bi se uradila kvalitetna i pravilna inicijalna opservacija
      </li>
      <ol>
        <li>
          i adekvatno, u skladu sa tim, postavili ciljevi i vremenski ograničena
          evaluacija
        </li>
        <li>
          a zatim nastaviti sa merama podrške na osnovu izvršenog testiranja
          uspešnosti predloženih mera
        </li>
        <li>
          isto važi i za potencijalno darovite, sa kojima ćemo takođe raditi.
        </li>
      </ol>
      <div className={`space-y-5 `}>
        <p className=" first-letter:pl-6"> </p>
      </div>
    </div>
  );
};

export default About;
