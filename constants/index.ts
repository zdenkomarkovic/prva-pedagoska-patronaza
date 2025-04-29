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
  {
    title: "Usluge",
    list: [
      {
        title: "Savetovanje za roditelje",
        link: "/usluge/1",
      },
      {
        title: "Rana procena i dijagnostika",
        link: "/usluge/2",
      },
      {
        title: "Individualni i grupni tretmani",
        link: "/usluge/3",
      },
      {
        title: "Tretmani kroz igru i pokret",
        link: "/usluge/4",
      },
      {
        title: "Edukacije i radionice za roditelje i stručnjake",
        link: "/usluge/5",
      },
    ],
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
export interface DescriptionItem {
  title: string;
  text: string;
}

export interface PageData {
  id: number;
  image: string;
  title: string;
  description: DescriptionItem[];
  text: string;
  text2: string;
}

export const pageData: PageData[] = [
  {
    id: 1,
    image: "/savetovanje1.jpg",
    title: "Savetovanje za roditelje",
    description: [
      {
        title: "Prvi koraci nakon sumnje ili dijagnoze",
        text: "Šta kada posumnjate ili dobijete dijagnozu? Kroz razgovor sa stručnim licima, dobićete jasne smernice, informacije i podršku u donošenju narednih koraka.",
      },
      {
        title: "Kako da podržite svoje dete kod kuće",
        text: "Učimo vas kako da kroz svakodnevne aktivnosti pružite detetu sigurnost, rutinu i podsticaj za razvoj – u skladu sa njegovim individualnim potrebama.",
      },
      {
        title: "Kako da se nosite sa stresom i izazovima roditeljstva",
        text: "Roditeljima je potrebna snaga da vode svoju decu kroz odrastanje. Radimo na osnaživanju vas kroz razgovor, praktične savete i emocionalnu podršku.",
      },
      {
        title: "Prava deteta i podrška u sistemu obrazovanja",
        text: "Informišemo vas o pravima vašeg deteta i dostupnim oblicima podrške u obrazovnom sistemu – kako biste znali kome da se obratite i kako da zastupate interese svog deteta.",
      },
    ],
    text: "Podrška roditeljima je važan deo našeg rada. Kroz stručno savetovanje pomažemo vam da razumete potrebe svog deteta i da se snađete u izazovima koje roditeljstvo nosi.",
    text2:
      "Naša misija je da vas podržimo u svakom koraku roditeljstva, pružajući vam neophodne informacije, alate i emocionalnu podršku. Kroz savetovanje, želimo da vam pomognemo da se snađete u izazovima koji dolaze sa odgajanjem deteta, kako biste stvorili sigurno i podržavajuće okruženje za njegov rast i razvoj. Uvek ste dobrodošli da se obratite našim stručnjacima za pomoć i savete koji su prilagođeni potrebama vašeg deteta.",
  },
  {
    id: 2,
    image: "/ranaprocena2.jpg",
    title: "Rana procena i dijagnostika",
    description: [
      {
        title: "Posmatranje deteta u igri i svakodnevnim situacijama",
        text: "Kroz igru, komunikaciju i svakodnevne aktivnosti, stručni tim beleži važne signale koji ukazuju na tok razvoja deteta. Cilj je da se procena odvija u detetu poznatom i opuštenom okruženju.",
      },
      {
        title: "Prepoznavanje razvojnih odstupanja i rizika",
        text: "Na osnovu posmatranja i razgovora sa roditeljima, uočavaju se odstupanja od tipičnog razvoja, kao i faktori rizika koji mogu uticati na detetov dalji napredak.",
      },
      {
        title: "Preporuke za dalje korake i saradnju sa stručnjacima",
        text: "Roditelji dobijaju konkretne preporuke – kako i kada uključiti dodatne stručnjake, koje metode podrške su najprikladnije i kako kreirati stabilno i stimulativno okruženje za dete.",
      },
    ],
    text: "Rana procena predstavlja prvi i najvažniji korak u razumevanju potreba deteta. Kroz pažljivo posmatranje i stručnu analizu, omogućavamo pravovremenu identifikaciju razvojnih izazova i pružamo smernice za dalje korake.",
    text2:
      "Rana procena ne znači dijagnozu - ona je prilika da se detetu pruži pravovremena i adekvatna podrška, što znatno povećava šanse za uspešan razvoj.",
  },
  {
    id: 3,
    image: "/individualniigrupni1.jpg",
    title: "Individualni i grupni tretmani",
    description: [
      {
        title: "Razvoj pažnje, govora, motorike, socijalnih veština",
        text: "Tretmani su usmereni na jačanje pažnje, izražavanja, fine i grube motorike, kao i na razvijanje odnosa sa vršnjacima – sve kroz zabavne i strukturisane zadatke.",
      },
      {
        title: "Integracija primarnih refleksa",
        text: "Kroz vežbe i pokrete koji podstiču integraciju neuroloških refleksa, pomažemo detetu da lakše savlada prepreke u učenju, ponašanju i svakodnevnom funkcionisanju.",
      },
      {
        title: "Brain Gym vežbe i senzorno-motorna stimulacija",
        text: "Kombinovanjem fizičkih i mentalnih aktivnosti, podstičemo balans između tela i uma. Vežbe su osmišljene da poboljšaju koordinaciju, fokus, samopouzdanje i emocionalnu stabilnost.",
      },
      {
        title: "Priprema za školu / dodatna podrška u učenju",
        text: "Radimo sa decom predškolskog uzrasta i školarcima - bilo da je u pitanju priprema za polazak u školu, savladavanje gradiva ili izgradnja zdravih radnih navika bez stresa.",
      },
    ],
    text: "Naš pristup je prilagođen potrebama svakog deteta. Kroz individualni ili grupni rad, razvijamo ključne sposobnosti i podržavamo celokupni razvoj – kroz igru, pokret, komunikaciju i stručno vođene aktivnosti.",
    text2:
      "Bez obzira na oblik tretmana, cilj je isti - osnažiti dete da raste, razvija se i koristi svoje potencijale u punoj meri.",
  },

  {
    id: 4,
    image: "/igraipokret.jpeg",
    title: "Tretmani kroz igru i pokret",
    description: [
      {
        title: "Razvoj kroz muzičke igre, ritam i kretanje",
        text: "Muzičke igre, ritmičke aktivnosti i kretanje podstiču dečiju kreativnost, koordinaciju i emocionalnu izražajnost. Ove aktivnosti pomažu u razvoju motornih veština i sposobnosti za koncentraciju.",
      },
      {
        title: "Grupne radionice za decu sa sličnim potrebama",
        text: "Kroz grupne aktivnosti, deca se uče socijalizaciji, saradnji i deljenju. Radionice su prilagođene potrebama svakog deteta, a zajednički rad sa vršnjacima omogućava im da se osete podržano i prihvaćeno.",
      },
      {
        title: "Jačanje samopouzdanja, saradnje i pozitivne slike o sebi",
        text: "Aktivnosti kroz igru i pokret pomažu deci da razviju pozitivnu sliku o sebi, povećavaju svoje samopouzdanje i poboljšaju međuljudske veštine. Kroz kreativne izazove, deca se ohrabruju da budu hrabra, saradnička i kreativna.",
      },
    ],
    text: "Igra i pokret su osnovni načini na koje deca uče i razvijaju se. Kroz naš pristup koji kombinuje igru, muziku, ritam i fizičku aktivnost, pomažemo deci da se izraze, povežu sa drugima i razvijaju važne socijalne i motorne veštine.",
    text2:
      "Igra i pokret su moćni alati u procesu razvoja. Naš cilj je da kroz ove aktivnosti pomognemo deci da izgrade zdrav temelj za učenje, rast i međuljudske odnose, a sve u bezbednom i podržavajućem okruženju.",
  },
  {
    id: 5,
    image: "/edukacije1.jpg",
    title: "Edukacije i radionice za roditelje i stručnjake",
    description: [
      {
        title: "Praktične tehnike za svakodnevni rad sa decom",
        text: "Nudimo konkretne strategije i tehnike koje možete primeniti u svakodnevnom životu, kako biste unapredili razvoj svog deteta. Ove tehnike obuhvataju sve oblasti, od socijalizacije i komunikacije, do motornih veština i emocionalnog razvoja.",
      },
      {
        title: "Kako čitati i primeniti IOP (Individualni obrazovni plan)",
        text: "Pomažemo roditeljima i stručnjacima da bolje razumeju IOP i kako da ga primene u praksi. IOP je ključni alat za pružanje personalizovane podrške deci, a kroz našu edukaciju ćete naučiti kako da se efikasno rukovodite ovim planom i postignete najbolje rezultate za vaše dete.",
      },
      {
        title:
          "Razumevanje senzorne integracije, ponašanja i emocionalnog razvoja",
        text: "Edukacija se fokusira i na razumevanje senzorne integracije, koja je ključna za pravilno funkcionisanje deteta. Takođe, pomažemo u razumevanju ponašanja i emocionalnog razvoja, kako bi roditelji i stručnjaci znali kako da prepoznaju i odgovore na specifične potrebe svakog deteta.",
      },
    ],
    text: "Kroz naše edukacije i radionice, pružamo roditeljima i stručnjacima neophodne alate i znanja za efikasnu podršku deci. Naši programi su usmereni na praktične tehnike i savete koji mogu pomoći u svakodnevnom radu sa decom, kao i bolje razumevanje njihovih potreba.",
    text2:
      "Naša edukacija je osmišljena da pomogne roditeljima i stručnjacima da steknu dublje razumevanje razvoja dece i efikasnije odgovore na njihove potrebe. Kroz ove radionice, stvaramo prostor za deljenje iskustava i implementaciju najboljih praksi u svakodnevnom radu sa decom.",
  },
];
