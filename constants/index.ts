import { IconType } from "react-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";
import { LuTimerReset } from "react-icons/lu";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  // {
  //   title: "Usluge",
  //   list: [
  //     {
  //       title: "Kuhinje",
  //       link: "",
  //     },
  //     {
  //       title: "Plakari",
  //       link: "",
  //     },
  //     {
  //       title: "TV Komode",
  //       link: "",
  //     },
  //     {
  //       title: "Projektovanje Enterijera",
  //       link: "",
  //     },
  //   ],
  // },
  {
    title: "Centar za drugo obrazovanje",
    link: "/centar",
  },
  {
    title: "Usluge",
    link: "/centar/#usluge",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface WorkList {
  id: number;
  title: string;
  text: string;
}

export const workList = [
  {
    id: 1,
    title: "Grupni treninzi",
    text: "Oblikuj svoje telo i poboljšaj kondiciju uz dinamične grupne treninge! Vežbaj u motivišućem okruženju, uz stručno vođstvo i podršku tima. Pridruži se i zajedno postižemo ciljeve!",
    icon: IoIosPeople,
  },
  {
    id: 2,
    title: "Individualni treninzi",
    text: "Ostvari maksimalne rezultate uz personalizovane individualne treninge! Treniraj prema svom tempu, uz stručnu podršku i plan prilagođen tvojim ciljevima. Fokus je na tebi!",
    icon: IoIosPerson,
  },
  {
    id: 3,
    title: "Pilates",
    text: "Poboljšaj fleksibilnost, snagu i držanje uz pilates treninge! Uz kontrolisane pokrete i fokus na disanje, oblikuj telo i oslobodi se stresa. Idealno za sve nivoe kondicije!",
    icon: IoFitnessOutline,
  },
  {
    id: 4,
    title: "Body power",
    text: "Ojačaj mišiće i poboljšaj izdržljivost uz intenzivan trening snage! Kombinacija tegova i funkcionalnih vežbi pomoći će ti da postigneš vrhunsku formu.",
    icon: GiWeightLiftingUp,
  },
  {
    id: 5,
    title: "Mix-fit",
    text: " Dinamičan spoj kardio i snage za maksimalne rezultate! Raznovrsni pokreti, visoka energija i zabavna atmosfera čine svaki trening izazovnim i efektivnim.",
    icon: MdOutlineSportsGymnastics,
  },
  {
    id: 6,
    title: "Aeronix",
    text: "Spoj aerobnih vežbi i funkcionalnog treninga za bolju kondiciju i oblikovanje tela! Povećaj izdržljivost, sagori kalorije i uživaj u energičnom ritmu vežbanja.",
    icon: PiRocketLaunchBold,
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Jelena R.",
    image: "/hero1.jpg",
    description:
      "Treninzi su odlični, atmosfera motivišuća, a instruktori puni znanja i energije! Već nakon nekoliko nedelja osećam ogromnu promenu u kondiciji i snazi. Preporučujem svima!",
  },
  {
    id: 2,
    title: "Ivana S.",
    image: "/hero1.jpg",
    description:
      "Fitnes klub je za mene više od mesta za vežbanje – ovde sam pronašla ekipu koja me inspiriše i podržava! Vežbamo zajedno, bodrimo se i družimo i van treninga. Ne bih ovo menjala ni za šta!",
  },
  {
    id: 3,
    title: "Ana M.",
    image: "/hero2.jpg",
    description:
      "Posle svakog treninga osećam se snažnije i zdravije! Programi su prilagođeni svim nivoima, a podrška trenera me stalno gura ka boljoj verziji sebe.",
  },
  {
    id: 4,
    title: "Katarina N.",
    image: "/hero3.jpg",
    description:
      "Od kada treniram ovde, imam više energije, manje stresa i bolju kondiciju! Ambijent je fantastičan, a treninzi su uvek dinamični i zanimljivi.",
  },
  {
    id: 5,
    title: "Milica P.",
    image: "/hero1.jpg",
    description:
      "Treniram ovde već nekoliko godina i mogu reći da mi je ovo druga porodica! Pored sjajnih treninga, upoznala sam divne ljude koji su mi postali bliski prijatelji. Motivacija i podrška su neverovatni!",
  },
];

export interface Cards1Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards1Data: Cards1Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Iskustvo i profesionalizam",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Iskustvo i profesionalizam",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Iskustvo i profesionalizam",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Srbija i inostranstvo",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
];

export interface ServisCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const servisCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Šlep automobila",
    text: "Vršimo šlep svih vrsta automobila, bez obzira na stanje vozila – havarisana, poluvozna ili ispravna.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Šlep motora",
    text: "Šlepamo motore, skutere, četvorotočkaše, motorne sanke i druga vozila brzo i sigurno.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Šlep kombija i kamiona",
    text: "Pružamo uslugu transporta kombija, kamiona i radnih mašina širom Srbije, uz sigurnost i brzinu.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Šlep vozila iz inostranstva",
    text: "Vršimo prevoz automobila iz inostranstva po najpovoljnijim cenama u Srbiji.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pomoc na putu 0-24h",
    text: "Svakom može zatrebati u nekom trenutku, naročito u hitnim slučajevima. Kada je potrebna šlep služba u Čačku i na teritoriji Zlatibora.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Šlep lakog i teškog tereta",
    text: "Za vas prevozimo i laki i teški teret, kako u Čačku, tako i u drugim gradovima Srbije.",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "Šlep havarisanog vozila",
    text: "Ukoliko ste imali havariju na putu, tu smo da pokupimo vaše vozilo i bezbedno ga odšlepamo do servisa.",
  },
  {
    id: 8,
    icon: GiWeight,
    title: "Šlep radnih mašina",
    text: "Šlep radnih mašina do lokacije na kojoj mogu nastaviti s poslom, brzo i sigurno.",
  },
  {
    id: 9,
    icon: GiWeight,
    title: "Izvlačenje sajlom vozila van puta",
    text: "Izvlačenje vozila sa puta sajlom, pažljivo izvedeno kako bi se izbegla dodatna oštećenja vozila.",
  },
  {
    id: 10,
    icon: GiWeight,
    title: "Prevoz poljoprivrednih mašina",
    text: "Prevoz poljoprivrednih mašina, priključaka i opreme – idealno rešenje za one koje je lakše transportovati nego voziti, kao i za neispravne mašine.",
  },
];

export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Elektroinstalacije",
    text: "",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Elektro ormani",
    text: "",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Industrijski elektro ormani",
    text: "",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Pružamo usluge izrade, montaže i održavanja elektro ormana za domaćinstva, poslovne prostore i industrijska postrojenja. Naš tim vodi računa o kvalitetu instalacija i bezbednosti sistema, uz poštovanje svih standarda i propisa.",
};

export interface Tim {
  name: string;
  title: string;
  image: string;
}

export const tim: Tim[] = [
  {
    name: "Jelena Matic",
    title: "Master Vaspitač",
    image: "/jelena.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
];

export interface PageData {
  id: number;
  image: string;
  title: string;
  description: string[];
  text: string;
  text2: string;
}

export const pageData: PageData[] = [
  {
    id: 1,
    image: "/savetovanje.jpg",
    title: "Savetovanje za roditelje",
    description: [
      "- Prvi koraci nakon sumnje ili dijagnoze",
      "- Kako da podržite svoje dete kod kuće",
      "- Kako da se nosite sa stresom i izazovima roditeljstva",
      "- Prava deteta i podrška u sistemu obrazovanja",
    ],
    text: "Lice za bezbednost i zdravlje na radu – savetnik/saradnik zastupa poslodavca pred inspekcijskim organima – inspekcija rada",
    text2:
      "Institut LIRA DOO pruža kompletnu podršku poslodavcima u ispunjavanju svih zakonskih obaveza iz oblasti bezbednosti i zdravlja na radu. Naš tim inženjera i savetnika osigurava da vaše poslovanje bude bezbedno, usklađeno sa propisima i efikasno organizovano. U okviru ove oblasti, izrađujemo i sprovodimo sledeće:",
  },
  {
    id: 2,
    image: "/ranaprocena.jpg",
    title: "Rana procena i dijagnostika",
    description: [
      "- Posmatranje deteta u igri i svakodnevnim situacijama",
      "- Prepoznavanje razvojnih odstupanja i rizika",
      "- Preporuke za dalje korake i saradnju sa stručnjacima",
    ],
    text: "Naš tim stručnjaka pruža podršku u identifikaciji obaveza, prikupljanju podataka, izradi dokumentacije i komunikaciji sa nadležnim institucijama. Zaštitimo životnu sredinu zajedno – stručno, odgovorno i savesno.",
    text2:
      "Institut LIRA DOO pruža stručne usluge u oblasti zaštite životne sredine u skladu sa važećim zakonima i propisima Republike Srbije. Naš cilj je da pomognemo pravnim licima da posluju odgovorno, održivo i u potpunoj zakonskoj usklađenosti. U okviru usluga zaštite životne sredine nudimo:",
  },
  {
    id: 3,
    image: "/individualniigrupni.jpg",
    title: "Individualni i grupni tretmani",
    description: [
      "- Razvoj pažnje, govora, motorike, socijalnih veština",
      "- Integracija primarnih refleksa",
      "- Brain Gym vežbe i senzorno-motorna stimulacija",
      "- Priprema za školu / dodatna podrška u učenju",
    ],
    text: "Naš stručni tim osigurava da svi dokumenti budu izrađeni pravovremeno, precizno i u skladu sa važećim propisima, uz punu podršku tokom inspekcijskih nadzora. Bezbednost je na prvom mestu – poverite nam svoju zaštitu od požara.",
    text2:
      "Institut LIRA DOO pruža sveobuhvatne usluge iz oblasti zaštite od požara, usklađene sa zakonodavstvom i pravilnicima Republike Srbije. Naš cilj je da poslodavcima omogućimo bezbedno radno okruženje i efikasnu prevenciju rizika od požara. U okviru ove oblasti obavljamo:",
  },

  {
    id: 4,
    image: "/igraipokret.jpeg",
    title: "Tretmani kroz igru i pokret",
    description: [
      "- Razvoj kroz muzičke igre, ritam i kretanje",
      "- Grupne radionice za decu sa sličnim potrebama",
      "- Jačanje samopouzdanja, saradnje i pozitivne slike o sebi",
    ],
    text: "Planovi se izrađuju u skladu sa vrstom delatnosti klijenta, specifičnostima lokacije i zakonskim zahtevima, a sadrže procenu rizika, plan mera, način evakuacije i koordinaciju sa nadležnim službama. Budite spremni – pravilno planiranje spašava živote i imovinu.",
    text2:
      "U skladu sa zakonskim obavezama i standardima, Institut LIRA DOO pruža usluge planiranja i organizovanja sistema zaštite i spasavanja u slučaju vanrednih situacija. Pravna lica su u obavezi da preduzmu sve mere za zaštitu života, zdravlja ljudi, imovine i životne sredine u vanrednim okolnostima. Naše usluge obuhvataju:",
  },
  {
    id: 5,
    image: "/edukacije.jpg",
    title: "Edukacije i radionice za roditelje i stručnjake",
    description: [
      "- Praktične tehnike za svakodnevni rad sa decom",
      "- Kako čitati i primeniti IOP (Individualni obrazovni plan)",
      "- Razumevanje senzorne integracije, ponašanja i emocionalnog razvoja",
    ],
    text: "Naš tim obezbeđuje usklađenost sa važećim zakonodavstvom, zaštitu interesa poslodavca i jasnoću u komunikaciji sa zaposlenima. Uredna dokumentacija – temelj svakog uspešnog kolektiva.",
    text2:
      "Institut LIRA DOO nudi podršku u pripremi kompletne dokumentacije iz oblasti radnih odnosa, u skladu sa Zakonom o radu i drugim relevantnim propisima. Kvalitetna i pravovremena dokumentacija ključna je za zakonito poslovanje i stabilne odnose sa zaposlenima. Usluge obuhvataju:",
  },
];
