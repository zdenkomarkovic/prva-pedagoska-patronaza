import React from "react";

const Usluge = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto py-7 md:py-12 border-t border-primary space-y-5">
      {" "}
      <h2 className=" font-gagalin md:pb-7">
        Usluge našeg Centra su namenjene deci pred polazak u školu, školskoj
        deci, svoj deci tipičnog i netipičnog razvoja, roditeljima i porodicama.
      </h2>
      <ul className="space-y-2">
        <li className=" first-letter:pl-6">
          - priprema dece pred polazak u školu i tranziciju vrtić-škola, kao i
          adekvatna priprema za socijalizaciju u novoj sredini
        </li>
        <li className=" first-letter:pl-6">
          - podrška (pomoć) deci pri izradi i boljem razumevanju školskih
          obaveza, sticanje radnih navika koje neće biti opterećenje za školarca
        </li>
        <li className=" first-letter:pl-6">
          - učenje životnih veština u smislu ostvarivanja svog punog kreativnog,
          intelektualnih i razvojnih veština
        </li>
        <li className=" first-letter:pl-6">
          - prepoznavanje i podrška napredovanju dece svojim tempom van kalupa
          sistema, oslanjanje na svoje snage
        </li>
        <li className=" first-letter:pl-6">
          - prepoznavanje specifičnosti i potencijalne darovitosti, kao i mere
          podrške za svaki vid darovitosti
        </li>
        <li className=" first-letter:pl-6">
          - rešavanje problema nedostatka vremena roditelja u radu sa decom
        </li>

        <li className=" first-letter:pl-6">
          - rad sa decom netipičnog razvoja
        </li>

        <li className=" first-letter:pl-6">
          - edukacija roditelja za rad sa decom tipičnog i netipičnog razvoja sa
          ciljem razumevanja potreba deteta od strane roditelja
        </li>
      </ul>
      <div className={`space-y-5 `}>
        <p className=" first-letter:pl-6"> </p>
      </div>
    </div>
  );
};

export default Usluge;
